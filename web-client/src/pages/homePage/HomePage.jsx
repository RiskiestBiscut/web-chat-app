import Sidebar from "../../components/sidebar/Sidebar"
import MessageContainer from "../../components/Messages/MessageContainer"

const HomePage = () => {
  return (
    <div className="flex sm:h-[450px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default HomePage
