package com.example.demo;


import java.util.*;

public class UserService {
	private static List<User> Users = new ArrayList<>();
	
	public User loginUser(String name,String password){
		
		for (User user : Users) {
			if (user.getName().equals(name) && user.getPassword().equals(password)) {
				return user;
			}
		}
		return null;
	}
	
}
