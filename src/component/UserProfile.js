import React from 'react';
import { useNavigate } from 'react-router-dom';
export const UserProfile= () => {
   const styles = {
      
      maincontener: {
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '10px',
      padding:'30px 40px',
      height: '100vh',
      backgroundImage: "url('https://i.pinimg.com/originals/c9/1f/b8/c91fb819040d40b27965cad41a059a69.jpg')",
  },

  Container:{
      width: '250px',
      height:'250px',
      backgroundColor: 'grey',
      border:'2px solid rgba(248 248 240, 0.975);',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      padding: '30px 40px',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      borderBottomLeftRadius: '2px',
      borderBottomRightRadius: '2px',
  },

  usrProfile :{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px',
     
  },

  btn :{
      position: 'absolute',
      top: 50,
      left: 20,
      
  },

  userdetail :{
      display:'flex',
      flexDirection:'column',
      width: '200px',
      height: '250px',
      backgroundColor: 'aliceblue',
      border: '2px solid rgb(255, 255, 252)',
      backdropFilter: 'blur(20px)',
      boxshadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      padding: '30px 63px',
      borderTopLeftRadius: '2px',
      borderTopRightRadius: '2px',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
     
  },

  username :{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '-5px',
      
  },
  userimage:{
      width: '110px',
  height: '110px',
  overFlow: 'hidden',
  borderRadius:'50px',
  marginTop: '50px',
      
  }
};
const navicate= useNavigate()
const handler=()=>{
   navicate(-1)
}

return (

   <div style={styles.maincontener}>
      <div style={styles.Container}>

         <div style={styles.btn}>
            <button onClick={() => handler()} style={styles.Back} type="submit">Back</button>
         </div>

         <div style={styles.usrProfile}>
            <img style={styles.userimage}src="https://th.bing.com/th/id/OIP.jqtaBhro1KIXA1qvTGaMuQHaLW?pid=ImgDet&w=189&h=289&c=7&dpr=1.3" alt="Description of the image" />

         </div>
         <h1 style={styles.username}>Name</h1>

      </div>

      <div style={styles.userdetail}>
         <p>Edit profile</p>
         <p>My stars</p>
         <p>Settings</p>
         <p>Invite a friend</p>
         <p>Help</p>
      </div>

   </div> 
)  
}
export default UserProfile; 
   

