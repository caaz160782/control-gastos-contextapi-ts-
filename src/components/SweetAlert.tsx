import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal)


type openAlertProps={
    title?:string
    text?:string
}

const openAlert=(title:string,text:string)=>{
    MySwal.fire({
        icon: "error",
        title,
        text,        
      });
}

const SweetAlert =({title='Oops...',text='Something went wrong!'}:openAlertProps ) => {
  return (
  <>
      {openAlert(title,text)}
  </>   
  )
}

export default SweetAlert