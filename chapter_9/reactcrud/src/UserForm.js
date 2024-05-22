import React, { Component } from 'react'; 
import { Formik, Form, Field, ErrorMessage } from 'formik'; 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'; 
 
class UserForm extends Component { 
  render(){ 
    return( 
      <div> 
          <h1>{this.title}</h1> 
          <Formik 
            initialValues={{ username: '', email: '' }} 
            validate={values => { 
              let errors = {}; 
              if (!values.email) { 
                errors.email = 'Required'; 
              } else if ( 
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) 
              ) { 
                errors.email = 'Invalid email address'; 
              } 
              else if (values.email.length < 10) { 
                errors.email = 'Email address too short'; 
              }  
               
              if (!values.username) { 
                errors.username = 'Required'; 
              } 
              else if (values.username.length < 3) { 
                errors.username = 'username too short'; 
              }   
 
              return errors; 
            }} 
            onSubmit={(values, { setSubmitting }) => { 
              setTimeout(() => { 
                // actual submit logic...          
                firebase.database().ref('/').push({ 
                    username: values.username,  
                    email: values.email   
                }).then(() => this.props.history.push("/"));                                  
                 
                setSubmitting(false); 
              }, 400); 
            }} 
          > 
            {({ isSubmitting }) => ( 
              <Form> 
<Field type="email" name="email" /> 
<span style={{ color:"red", fontWeight: "bold" }}> 
<ErrorMessage name="email" component="div" /> 
</span>                                
<Field type="text" name="username" /> 
<span style={{ color:"red", fontWeight: "bold" }}> 
<ErrorMessage name="username" component="div" /> 
</span>                 
<button type="submit" disabled={isSubmitting}> 
Submit 
</button> 
</Form> 
)} 
</Formik> 
</div>       
)     
} 
} 
export default UserForm; 