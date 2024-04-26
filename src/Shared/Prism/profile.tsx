
class ProfileService{
   
  image = "../../../../assets/images/users/16.jpg"
  static image: string;

 static handleChange(ele:any){
     const [file] = ele.target.files;
     this.image =  URL.createObjectURL(file)
     this.returnImage()
 }

 static returnImage(){
      return this.image
 }

 static handleChangeUrl(link:any){
     this.image =  link
     this.returnImage()
 }
 
}
export default ProfileService;