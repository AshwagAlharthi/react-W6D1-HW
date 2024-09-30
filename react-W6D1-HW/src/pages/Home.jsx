import Content from "../components/Content"
import NavbarBtn from "../components/NavbarBtn"

function Home() {
  return (
    <div className="flex flex-col justify-end max-sm:gap-4 gap-12 w-full h-screen bg-[url('https://media.cntraveler.com/photos/6059636d8f4452dac88c59f4/master/w_1920%2Cc_limit/Denali-GettyImages-1132999090.jpg')] 
      bg-cover bg-center">
      <Content
        id="1"
        name="Denali National Park"
        countryName="Alaska"
        desc="Denali’s beauty is worth braving the extreme low temperatures. Contains the 6 million acres of shimmering lakes and jagged mountains." />
        <NavbarBtn />
    </div>
  )
}

export default Home
