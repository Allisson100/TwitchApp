import Home from './pages/Home';
import './reset.css'

import { getStreamerInfo } from './services/apiTwitch/getStreamerInfo'
import { getStreamerClips } from './services/apiTwitch/getStreamerClips'

const apiStreamerInfo = await getStreamerInfo()
const apiStreamerClips = await getStreamerClips()

const streamerInfo = apiStreamerInfo.data[0]
const streamerClips = apiStreamerClips.data

function App() {
  
  return (
    <div>
      <Home 
        streamerInfo={streamerInfo}
        streamerClips={streamerClips}
      />
    </div>
  );
}

export default App;
