document.getElementById('password-box').style.display ='none';
        function showPasswordBox(){
            var email = document.getElementById('email').value;
            document.getElementById('email-box').style.display ='none';
            document.getElementById('email-box').style.display ='none';
            document.getElementById('password-box').style.display ='block';
            document.getElementById('entered-email').innerHTML = email;
        }
        function onEyeClick(){
            let ele = document.getElementById('eye-icon');
            let password = document.getElementById('password');
           
           if(password.value.length > 0){
            
            document.getElementById('password').value = password.value;
            password.focus();
                //document.getElementById('password-label').classList.add('password-fixed');
                if(ele.className == 'fa fa-eye-slash'){
                    document.getElementById('eye-icon').classList.remove('fa-eye-slash');
                    document.getElementById('eye-icon').classList.add('fa-eye');
                    password.setAttribute('type','text');
                }else{
                    document.getElementById('eye-icon').classList.remove('fa-eye');
                    document.getElementById('eye-icon').classList.add('fa-eye-slash');
                    password.setAttribute('type','password');
                }
           }    
        }
        function onPasswordFocus(){
            let password = document.getElementById('password');
            if(password.value.length > 0){
                document.getElementById('password-label').classList.add('password-fixed');
            }else{
                document.getElementById('password-label').classList.remove('password-fixed');
            }
        }