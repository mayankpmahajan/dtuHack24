export const postForm =async(req,res,next)=>{
    const {goals,income,time} = req.body;
    res.status(200).send("yeh raha data");
}
