import Content from "../components/Content"
import NavbarBtn from "../components/NavbarBtn"

function Norway() {
  return (
    <div className="flex flex-col justify-end max-sm:gap-4 gap-12 w-full h-screen bg-[url('https://media.cntraveler.com/photos/605970847ef97a43a1af2c9f/master/w_1920%2Cc_limit/Svalbard-GettyImages-481931116.jpg')] 
        bg-cover bg-center">
      <Content
        id="4"
        name="Svalbard"
        countryName="Norway"
        desc="Known for spectacular Northern Lights viewing opportunities—the sky is pitch black all day and night from October through February, due to its position within the Arctic Circle." />
      <NavbarBtn />
    </div>
  )
}

export default Norway