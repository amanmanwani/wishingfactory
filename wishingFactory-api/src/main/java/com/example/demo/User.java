package com.example.demo;


public class User {
	 
	private String username;
	private String password;
	private String type;
	private String email;
	private String phoneNo;
	private String city;
	
	
	public User() {
		// TODO Auto-generated constructor stub
	}
	
	public User(String name,String password) {
		this.username=name;
		this.password = password;
	}
	
	public String getName() {
		return username;
	}
	public String getPassword() {
		return password;
	}
	
	public void setName(String name) {
		this.username = name;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
