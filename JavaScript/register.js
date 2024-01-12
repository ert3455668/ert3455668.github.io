
        const registerVue = new Vue({
            el:'#register',
            data:{
                //註冊表單的資料
                signup:{
                    account:'',
                    email:'',
                    password:'',
                    checkPassword:''
                },
                //註冊表單驗證
                signupCheck:{
                    accountError:false,
                    accountErrorMsg:'',
                    emailError:false,
                    emailErrorMsg:'',
                    passwordError:false,
                    passwordErrorMsg:'',
                    checkPasswordError:false,
                    checkPasswordErrorMsg:'',
                },
                addVerify:true

            },
            methods:{
                checkAddVerify(){
                    for(let prop in this.signupCheck){
                        console.log(prop)
                        if(this.signupCheck[prop]==true){
                            this.addVerify=true
                            console.log(this.signupCheck[prop])
                            return
                        }
                    }
                    this.addVerify = false
                }
            },
            watch:{
                "signup.account":{
                    //剛渲染時就執行這個watch,而不是等值改變在監聽
                    immediate:true,
                    handler:function(){
                        if(this.signup.account==""){
                            this.signupCheck.accountError=true
                            this.signupCheck.accountErrorMsg="帳號不得為空!"
                        }
                        else if(this.signup.account.length<8){
                            this.signupCheck.accountError=true
                            this.signupCheck.accountErrorMsg="帳號不得小於8碼!"
                        }    
                        else{
                            this.signupCheck.accountError=false
                            this.signupCheck.accountErrorMsg=""
                        }
                        this.checkAddVerify()
                    }
                },
                "signup.email":{
                    immediate:false,
                    handler:function(){
                        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                        if(!emailRegex.test(this.signup.email)){
                            this.signupCheck.emailError = true
                            this.signupCheck.emailErrorMsg="輸入的電子郵件格式錯誤"
                        }
                        else{
                            this.signupCheck.emailError = false
                            this.signupCheck.emailErrorMsg=""
                        }
                        this.checkAddVerify()
                    }
                },
                "signup.password":{
                    immediate:true,
                    handler:function(){
                        this.signupCheck.passwordError=false
                        this.signupCheck.passwordErrorMsg=""
                        
                        let passwordRegex = /^[0-9]*$/

                        if (!passwordRegex.test(this.signup.password)) {
                            this.signupCheck.passwordError = true
                            this.signupCheck.passwordErrorMsg = "密碼必須為數字"
                        }
                        else if(this.signup.password.length<8){
                            this.signupCheck.passwordError=true
                            this.signupCheck.passwordErrorMsg="密碼不得小於8碼"
                        }
                        else{ 
                            this.signupCheck.passwordError=false
                            this.signupCheck.passwordErrorMsg=""
                        }
                        this.checkAddVerify()
                    }
                },
                "signup.checkPassword":{
                    immediate:false,
                    handler:function(){
                        if(this.signup.checkPassword != this.signup.password){
                            console.log(2)
                            console.log(this.signup.checkPassword )
                            console.log(this.signup.password)
                            
                            this.signupCheck.checkPasswordError=true
                            this.signupCheck.checkPasswordErrorMsg="密碼與第一次不相符!"
                        }
                        else{
                            console.log(3)
                            this.signupCheck.checkPasswordError=false
                            this.signupCheck.checkPasswordErrorMsg=""
                        }
                        this.checkAddVerify()
                    }
                },


            }, 

        })
