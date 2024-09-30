import Content from "../components/Content"
import NavbarBtn from "../components/NavbarBtn"

function Ecuador() {
  return (
    <div className="flex flex-col justify-end max-sm:justify-evenly max-sm:gap-4 gap-12 w-full h-screen bg-[url('https://media.cntraveler.com/photos/5e45b1e6927f820008dcc711/master/w_1920%2Cc_limit/Galapagos%2520GettyImages-470028282.jpg')] 
    bg-cover bg-center">
    <Content
        id="3"
      name="Galápagos Islands"
      countryName="Ecuador"
      desc="Formed of lava piles and dotted with shield volcanoes. The striking ruggedness of the arid landscape is accentuated by high volcanic mountains, craters, and cliffs. " />
    <NavbarBtn />
  </div>
  )
}

export default Ecuador