var app = new Vue({
	el: '#app',
	  data: {
	  	  noName: true,
		  noHome: false,
		  noHobbies: false,
		  nnNotAsked: false,
		  yesnn: false,
		  complete: false,
		  finish: false,
		  userName: '',
		  userHome: '',
		  userHobbies: '',
		  userNicknames: '',
		  name: '',
		  home: '',
		  hobbies: '',
		  nicknames: '',
	  },
	methods: {
		addName(){
			this.userName = this.name;
			this.name = '';
			this.noName = false;
			this.noHome = true;
		},
		addHome(){
			this.userHome = this.home;
			this.home = '';
			this.noHome = false;
			this.noHobbies = true;
		},
		addHobbies(){
			this.userHobbies = this.hobbies;
			this.hobbies = '';
			this.noHobbies = false;
			this.nnNotAsked = true;
		},
		haveNicknames(){
			this.nnNotAsked = false;
			this.yesnn = true;
		},
		addNicknames(){
			this.userNicknames = this.nicknames;
			this.nicknames = '';
			this.yesnn = false;
			this.finish = true;
			makeProfile();
		},
		noNicknames(){
			this.nnNotAsked = false;
			this.yesnn = false;
			this.finish = true;
			makeProfile();
		},
		makeProfile(){
			this.finish = false;
			this.complete = true;
		}
	},
});
