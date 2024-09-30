import Content from "../components/Content"
import NavbarBtn from "../components/NavbarBtn"

function Iceland() {
  return (
    <div className="flex flex-col justify-end max-sm:gap-4 gap-12 w-full h-screen bg-[url('https://media.cntraveler.com/photos/60596df48f4452dac88c59fe/master/w_1920%2Cc_limit/Reynisfjara-GettyImages-1004089860.jpg')] 
        bg-cover bg-center">
      <Content
        id="2"
        name="Reynisfjara"
        countryName="Iceland"
        desc="Jet-black sand and spectacularly shaped basalt columns make this beach one of the most impressive sites in an already impressive country." />
      <NavbarBtn />
    </div>
  )
}

export default Iceland