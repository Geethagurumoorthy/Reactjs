import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Person, Email, Phone, Lock, Visibility, VisibilityOff, Cake,
  LocationOn, School, Delete, AutoAwesome, CheckCircle
} from "@mui/icons-material";
import {
  TextField, MenuItem, IconButton, InputAdornment, Checkbox,
  FormControlLabel, Radio, RadioGroup, FormLabel
} from "@mui/material";

const API_URL = "https://jsonplaceholder.typicode.com/users";
const initialForm = {
  firstName:"",lastName:"",email:"",phone:"",gender:"",dob:"",
  password:"",confirmPassword:"",address:"",city:"",
  qualification:"",declaration:false
};

const validateField = (n,v,f) => {
  if(["firstName","lastName"].includes(n)){
    const x=n==="firstName"?"First":"Last";
    if(!v.trim()) return `${x} name is required.`;
    if(!/^[A-Za-z ]+$/.test(v)) return `${x} name can contain only letters.`;
    if(v.trim().length<2) return `${x} name must contain at least 2 characters.`;
  }
  if(n==="email"){
    if(!v.trim()) return "Email is required.";
    if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(v))
      return "Please enter a valid email address.";
  }
  if(n==="phone"){
    if(!v.trim()) return "Phone number is required.";
    if(!/^[6-9]\d{9}$/.test(v))
      return "Phone number must be a valid 10-digit number.";
  }
  if(n==="gender"&&!v) return "Please select your gender.";
  if(n==="dob"){
    if(!v) return "Date of birth is required.";
    if(new Date(v)>new Date()) return "Date of birth cannot be in the future.";
  }
  if(n==="address"){
    if(!v.trim()) return "Address is required.";
    if(v.trim().length<10) return "Address must contain at least 10 characters.";
  }
  if(n==="city"){
    if(!v.trim()) return "City is required.";
    if(!/^[A-Za-z ]+$/.test(v)) return "City can contain only letters.";
  }
  if(n==="qualification"&&!v) return "Please select your qualification.";
  if(n==="password"){
    if(!v) return "Password is required.";
    if(v.length<8) return "Password must contain at least 8 characters.";
    if(!/[A-Z]/.test(v)) return "Password must contain at least one uppercase letter.";
    if(!/[a-z]/.test(v)) return "Password must contain at least one lowercase letter.";
    if(!/[0-9]/.test(v)) return "Password must contain at least one number.";
  }
  if(n==="confirmPassword"){
    if(!v) return "Please confirm your password.";
    if(v!==f.password) return "Passwords do not match.";
  }
  if(n==="declaration"&&!v) return "Please accept the declaration.";
  return "";
};

const validateForm = f => Object.keys(f).reduce((e,n)=>{
  const x=validateField(n,f[n],f); if(x)e[n]=x; return e;
},{});

const Input=({label,name,value,onChange,onBlur,type="text",icon,error,inputProps})=>
  <TextField fullWidth required type={type} label={label} name={name}
    value={value} onChange={onChange} onBlur={onBlur} error={!!error}
    helperText={error||""} inputProps={inputProps}
    InputLabelProps={type==="date"?{shrink:true}:undefined}
    InputProps={icon?{startAdornment:<InputAdornment position="start">{icon}</InputAdornment>}:undefined}/>;

const Password=({label,name,value,onChange,onBlur,visible,setVisible,error})=>
  <TextField fullWidth required type={visible?"text":"password"} label={label}
    name={name} value={value} onChange={onChange} onBlur={onBlur}
    error={!!error} helperText={error||""}
    InputProps={{
      startAdornment:<InputAdornment position="start"><Lock/></InputAdornment>,
      endAdornment:<InputAdornment position="end">
        <IconButton type="button" onClick={()=>setVisible(!visible)}>
          {visible?<VisibilityOff/>:<Visibility/>}
        </IconButton>
      </InputAdornment>
    }}/>;

const Header=({icon,title,subtitle,color})=>
  <div className="mb-6 flex items-center gap-4">
    <motion.div animate={{y:[0,-5,0]}} transition={{duration:2,repeat:Infinity}}
      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}>
      {icon}
    </motion.div>
    <div><h3 className="font-black text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  </div>;

const Section=({children,direction=-40,delay=0,className=""})=>
  <motion.section initial={{opacity:0,x:direction}} animate={{opacity:1,x:0}}
    transition={{duration:.6,delay}} whileHover={{y:-4}}
    className={`rounded-3xl border p-5 shadow-sm sm:p-7 ${className}`}>
    {children}
  </motion.section>;

function Register(){
  const [form,setForm]=useState(initialForm);
  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(true);
  const [showPassword,setShowPassword]=useState(false);
  const [showConfirmPassword,setShowConfirmPassword]=useState(false);
  const [errors,setErrors]=useState({});
  const [message,setMessage]=useState("");
  const [submitted,setSubmitted]=useState(false);

  useEffect(()=>{
    (async()=>{
      try{
        const r=await fetch(API_URL);
        if(!r.ok) throw Error("Failed");
        setUsers(await r.json());
      }catch(e){
        console.error(e); setMessage("Unable to load users.");
      }finally{setLoading(false);}
    })();
  },[]);

  const change=e=>{
    const {name,value,checked,type}=e.target;
    const v=type==="checkbox"?checked:value;
    setForm(f=>({...f,[name]:v})); setMessage("");
    if(submitted)
      setErrors(x=>({...x,[name]:validateField(name,v,{...form,[name]:v})}));
  };

  const blur=e=>{
    const {name,value}=e.target;
    setErrors(x=>({...x,[name]:validateField(name,value,form)}));
  };

  const submit=async e=>{
    e.preventDefault(); setSubmitted(true);
    const er=validateForm(form); setErrors(er);
    if(Object.keys(er).length){
      setMessage("Please correct the highlighted fields.");
      setTimeout(()=>document.querySelector(".Mui-error")
        ?.scrollIntoView({behavior:"smooth",block:"center"}),100);
      return;
    }

    const newUser={
      name:`${form.firstName} ${form.lastName}`,email:form.email,
      phone:form.phone,gender:form.gender,dob:form.dob,
      address:form.address,city:form.city,qualification:form.qualification
    };

    try{
      const r=await fetch(API_URL,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newUser)
      });
      if(!r.ok) throw Error("Registration failed");
      const d=await r.json();
      setUsers(u=>[{...d,...newUser},...u]);
      setMessage("Registration successful! 🎉");
      setForm(initialForm); setErrors({}); setSubmitted(false);
      setShowPassword(false); setShowConfirmPassword(false);
    }catch(e){
      console.error(e);
      setMessage("Registration failed. Please try again.");
    }
  };

  const del=id=>setUsers(u=>u.filter(x=>x.id!==id));
  const qualifications=["10th","12th","Diploma","BCA","B.Sc","B.Com","MCA","M.Sc","Other"];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-100">
      <header className="relative overflow-hidden bg-gradient-to-br from-violet-800 via-purple-700 to-indigo-900 px-5 py-16 text-white sm:py-20">
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div initial={{scale:0}} animate={{scale:1}}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15">
            <AutoAwesome className="!text-4xl"/>
          </motion.div>
          <h1 className="text-4xl font-black sm:text-6xl">
            Create Your <span className="text-pink-300">Account</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-purple-100">
            Join our community and start your journey with a beautiful registration experience.
          </p>
        </div>
      </header>

      <main className="relative mx-auto -mt-10 max-w-6xl px-4 pb-16">
        <motion.div initial={{opacity:0,y:60}} animate={{opacity:1,y:0}}
          className="overflow-hidden rounded-[30px] bg-white/90 shadow-2xl">

          <div className="border-b bg-gradient-to-r from-white to-purple-50 px-6 py-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                <Person/>
              </div>
              <div><h2 className="text-2xl font-black">Registration Details</h2>
                <p className="text-sm text-gray-500">Fill in your information below</p>
              </div>
            </div>
          </div>

          <form onSubmit={submit} noValidate className="space-y-8 p-5 sm:p-10">
            <Section className="border-purple-100 bg-purple-50/50">
              <Header icon={<Person/>} title="Personal Details"
                subtitle="Tell us about yourself" color="bg-purple-100 text-purple-600"/>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {[
                  ["First Name","firstName",<Person/>],
                  ["Last Name","lastName"],
                  ["Email","email",<Email/>],
                  ["Phone Number","phone",<Phone/>]
                ].map(([l,n,i])=>
                  <Input key={n} label={l} name={n}
                    type={n==="email"?"email":"text"} value={form[n]}
                    onChange={change} onBlur={blur} error={errors[n]}
                    icon={i} inputProps={n==="phone"?{maxLength:10}:undefined}/>
                )}

                <div>
                  <div className={`rounded-2xl border bg-white p-4 ${errors.gender?"border-red-500":"border-purple-100"}`}>
                    <FormLabel>Gender *</FormLabel>
                    <RadioGroup row name="gender" value={form.gender}
                      onChange={change} onBlur={blur}>
                      {["Male","Female","Other"].map(x=>
                        <FormControlLabel key={x} value={x}
                          control={<Radio color="secondary"/>} label={x}/>
                      )}
                    </RadioGroup>
                  </div>
                  {errors.gender&&<p className="text-xs text-red-600">{errors.gender}</p>}
                </div>

                <Input type="date" label="Date of Birth" name="dob"
                  value={form.dob} onChange={change} onBlur={blur}
                  error={errors.dob} icon={<Cake/>}/>
              </div>
            </Section>

            <Section direction={40} delay={.1}
              className="border-pink-100 bg-pink-50/50">
              <Header icon={<LocationOn/>} title="Address Details"
                subtitle="Where do you live?" color="bg-pink-100 text-pink-600"/>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <TextField fullWidth required multiline rows={3}
                  label="Address" name="address" value={form.address}
                  onChange={change} onBlur={blur} error={!!errors.address}
                  helperText={errors.address||""}/>
                <Input label="City" name="city" value={form.city}
                  onChange={change} onBlur={blur} error={errors.city}/>
              </div>
            </Section>

            <Section delay={.2} className="border-blue-100 bg-blue-50/50">
              <Header icon={<School/>} title="Education"
                subtitle="Select your qualification" color="bg-blue-100 text-blue-600"/>
              <TextField fullWidth required select label="Qualification"
                name="qualification" value={form.qualification}
                onChange={change} onBlur={blur}
                error={!!errors.qualification}
                helperText={errors.qualification||""}>
                {qualifications.map(x=><MenuItem key={x} value={x}>{x}</MenuItem>)}
              </TextField>
            </Section>

            <Section direction={-40} delay={.3}
              className="border-green-100 bg-green-50/50">
              <Header icon={<Lock/>} title="Account Security"
                subtitle="Create your secure password" color="bg-green-100 text-green-600"/>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Password label="Password" name="password" value={form.password}
                  onChange={change} onBlur={blur} visible={showPassword}
                  setVisible={setShowPassword} error={errors.password}/>
                <Password label="Confirm Password" name="confirmPassword"
                  value={form.confirmPassword} onChange={change} onBlur={blur}
                  visible={showConfirmPassword} setVisible={setShowConfirmPassword}
                  error={errors.confirmPassword}/>
              </div>
              <div className="mt-5 rounded-2xl bg-white p-4">
                <p className="mb-2 font-bold">Password must contain:</p>
                {[
                  ["At least 8 characters",form.password.length>=8],
                  ["One uppercase letter",/[A-Z]/.test(form.password)],
                  ["One lowercase letter",/[a-z]/.test(form.password)],
                  ["One number",/[0-9]/.test(form.password)]
                ].map(([x,ok])=>
                  <span key={x} className={`mr-5 ${ok?"text-green-600":"text-gray-500"}`}>
                    ✓ {x}
                  </span>
                )}
              </div>
            </Section>

            <div className={`rounded-3xl border p-5 ${
              errors.declaration?"border-red-400 bg-red-50":"border-purple-200 bg-purple-50"}`}>
              <h3 className="mb-2 font-black text-purple-800">Declaration</h3>
              <FormControlLabel
                control={<Checkbox name="declaration" checked={form.declaration} onChange={change}/>}
                label="I hereby declare that all information provided by me is true and correct."
              />
              {errors.declaration&&<p className="text-xs text-red-600">{errors.declaration}</p>}
            </div>

            <AnimatePresence>
              {message&&
                <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
                  className={`flex items-center justify-center gap-2 rounded-2xl p-4 text-center font-bold ${
                    message.includes("successful")?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`}>
                  {message.includes("successful")&&<CheckCircle/>}{message}
                </motion.div>
              }
            </AnimatePresence>

            <motion.button type="submit" whileHover={{scale:1.02}} whileTap={{scale:.96}}
              className="w-full rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 px-6 py-5 font-black text-white shadow-xl">
              Create Account ✨
            </motion.button>
          </form>
        </motion.div>

        <motion.section initial={{opacity:0,y:50}} animate={{opacity:1,y:0}}
          className="mt-10 overflow-hidden rounded-[30px] bg-slate-950 shadow-2xl">
          <div className="bg-gradient-to-r from-slate-950 via-purple-950 to-indigo-950 px-6 py-7 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-purple-300">User Directory</p>
            <h2 className="text-2xl font-black">Registered Users</h2>
            <p className="text-sm text-slate-400">Total Users: {users.length}</p>
          </div>

          {loading ? <div className="p-12 text-center text-slate-400">Loading users...</div> :
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-white/5 text-slate-300">
                  <tr>{["#","Name","Email","Phone","Gender","Action"].map(x=>
                    <th key={x} className="p-4 text-left">{x}</th>)}</tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {users.map((u,i)=>
                      <motion.tr key={u.id} initial={{opacity:0,x:-30}}
                        animate={{opacity:1,x:0}} exit={{opacity:0,x:30}}
                        className="border-b border-white/5 text-slate-300">
                        <td className="p-4">{i+1}</td>
                        <td className="p-4 font-bold text-white">{u.name}</td>
                        <td className="p-4">{u.email}</td>
                        <td className="p-4">{u.phone}</td>
                        <td className="p-4">{u.gender||"N/A"}</td>
                        <td className="p-4">
                          <IconButton onClick={()=>del(u.id)} sx={{color:"#fb7185"}}>
                            <Delete/>
                          </IconButton>
                        </td>
                      </motion.tr>
                    )}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          }
        </motion.section>
      </main>
    </div>
  );
}

export default Register;