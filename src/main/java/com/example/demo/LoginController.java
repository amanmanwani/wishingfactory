package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class LoginController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping(value= "/login" , method = RequestMethod.GET)
	public String showLoginForm() {
		
		return "login";
	}
	
	@RequestMapping(value= "/login" , method = RequestMethod.POST)
	public String verifyLogin(@RequestParam String userId, @RequestParam String password) {
		User user = userService.loginUser(userId, password);
		if(user== null) {
			return "login";
		}
		return "redirect:/";

	}
	
}
