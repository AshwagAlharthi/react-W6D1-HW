import Content from "../components/Content"
import NavbarBtn from "../components/NavbarBtn"

function ZambiaZimbabwe() {
  return (
    <div className="relative flex flex-col justify-end max-sm:gap-4 gap-12 w-full h-screen bg-[url('https://media.cntraveler.com/photos/5cb63a516b5c4dca7b5ec156/master/w_1920%2Cc_limit/Victoria-Falls-Zambia-Zimbabwe_GettyImages-507449285.jpg')] 
      bg-cover bg-center">
      <Content
        id="5"
        name="Victoria Falls"
        countryName="Zambia and Zimbabwe"
        desc="The largest sheet of falling water in the world. viewing of the 500 million liters of water that pour over the falls." />
      <NavbarBtn />
    </div>
  )
}

export default ZambiaZimbabwe