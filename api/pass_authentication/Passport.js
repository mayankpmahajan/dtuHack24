 import passGoogle from 'passport-google-oauth20'
import passport from 'passport'
const GoogleStrategy = passGoogle.Strategy


passport.use(
    
    new GoogleStrategy(
  {
    
    callbackURL: "http://localhost:8800/api/auth/auth/google/callback",
  },
  
   function (accessToken, refreshToken, profile, done) {
   
    return done(null,profile );
  }
  )
);
passport.serializeUser((user,done)=>{
    done(null,user);
});
passport.deserializeUser((user,done)=>{
    done(null,user);
});

export default passport