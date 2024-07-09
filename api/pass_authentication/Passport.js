 import passGoogle from 'passport-google-oauth20'
import passport from 'passport'
const GoogleStrategy = passGoogle.Strategy


passport.use(
    
    new GoogleStrategy(
  {
    clientID:'105310426288-j3mdbl3r3944a4uiiu1p5cm667f0ee0s.apps.googleusercontent.com',
    clientSecret:' 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',
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