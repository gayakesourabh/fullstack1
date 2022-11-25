package com.example.springboot;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class employees {
	@Id
	int id;
	String name;
	String email;
    String mobno;
    String type;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobno() {
		return mobno;
	}
	public void setMobno(String mobno) {
		this.mobno = mobno;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public employees(int id, String name, String email, String mobno, String type) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.mobno = mobno;
		this.type = type;
	}
	public employees() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	

}