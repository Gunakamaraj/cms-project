 class Userservice{
    constructor(){
       let val=localStorage.getItem('db');
       if(val==null){
            val={
                user:[],
            };
            localStorage.setItem('db',JSON.stringify(val))
            this.db=val
       }
       
       else{
        this.db=JSON.parse(val);
       }
    }
    addUser(name,email,password){
        if(this.authUser(email)){
            throw new Error("user already exisist");
        }
        this.db.user.push({name,email,password});
        localStorage.removeItem('db');
        localStorage.setItem('db',JSON.stringify(this.db));
    }
    authUser(email){
        let res=this.db.user.find((obj)=>obj.email===email)
        return res!==undefined?true:false
    }
    authenticate(email,password){
        let user=this.db.user.find((obj)=>obj.email===email)
        if(user===undefined){
            throw new Error("worng mail id");
        }
        if(user.password!=password){
            throw new Error("wrong password");
        }
    }
    editUser(email,newEmail){
        if(!this.authUser(email)){
            throw new Error('User not exist');
        }
        this.db=this.db.user.map((obj)=>{
            if(obj.email===email)
                return {...obj,email:newEmail}
            return obj;
        })
        localStorage.removeItem('db');
        localStorage.setItem('db',JSON.stringify(this.db));
    }
    editPassword(email,newPassword){
        if(!this.authUser(email)){
            throw new Error('user not exist');
        }
        this.db=this.db.user.map((obj)=>{
            if(obj.password===password){
                return {...obj,password:newPassword}
            }
            return obj;
        })
        localStorage.removeItem('db');
        localStorage.setItem('db',JSON.stringify(this.db));
    }
}
let userService =new Userservice();
export default userService