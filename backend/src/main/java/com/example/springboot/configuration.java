package com.example.springboot;

import java.util.Properties;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;

@Configuration
public class configuration {
	
	@Autowired
	DataSource a;
	
	@Value("${hibernate.show.sql}")
	private String b;
	
	@Value("${hibernate.hbm2ddl.auto}")
	private String c;
	
	@Bean
	public LocalSessionFactoryBean method()
	{
		LocalSessionFactoryBean obj1=new LocalSessionFactoryBean();
		Properties obj2=new Properties();
		
		obj2.put("hibernate.show.sql",b);
		obj2.put("hibernate.hbm2ddl.auto", c);
		
		obj1.setDataSource(a);
		obj1.setHibernateProperties(obj2);
		obj1.setAnnotatedClasses(employees.class);
		
		return obj1;
	}
	

}
