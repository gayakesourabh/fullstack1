package com.example.springboot;



import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class controller {
	@Autowired
	SessionFactory obj;

	
	@GetMapping("/get")
	@Transactional
	public List m1()
	{
		Session s=obj.openSession();
		Criteria c=s.createCriteria(employees.class);
		List l=c.list();
		
		return l;
			
	}
	
	@GetMapping("/getbyid/{id}")
	@Transactional
	public employees m11(@PathVariable int id)
	{
		Session s=obj.openSession();
		Criteria c=s.createCriteria(employees.class);
		c.add(Restrictions.eq("id", id));
		employees e=(employees)c.uniqueResult();
		return e;
	}
	
	@PostMapping("/post")
	@Transactional
	public void m2(@RequestBody employees a)
	{
		Session s=obj.openSession();
		Transaction t = s.beginTransaction();
		s.save(a);
		t.commit();		
	}

	@PutMapping ("/put")
	@Transactional
	public void m3(@RequestBody employees a)
	{
		Session s=obj.openSession();
		Transaction t = s.beginTransaction();
		s.saveOrUpdate(a);
		t.commit();
	}
	
	@DeleteMapping ("/delete/{id}")
	@Transactional
	public void m4(@PathVariable int id)
	{
		Session s=obj.openSession();
		Transaction t = s.beginTransaction();
		Criteria c=s.createCriteria(employees.class);
		c.add(Restrictions.eq("id",id));
		employees a=(employees)c.uniqueResult();
		s.delete(a);
		t.commit();
	}
	{
		
	}
}
