import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      {/* header */}
      <div className="container">
        <div className="row">
          <Card image="https://static.tvtropes.org/pmwiki/pub/images/180px-NewestHomestar_9833.png" />
          <Card image="https://static.tvtropes.org/pmwiki/pub/images/marzipan_3356.png" />
          <Card image="https://static.tvtropes.org/pmwiki/pub/images/pom_pom_5773.PNG" />
          <Card image="https://static.tvtropes.org/pmwiki/pub/images/strongbad2kq.png" />
        </div>
        <div className="row">
          <Card image="https://static.tvtropes.org/pmwiki/pub/images/strong_mad_1184.png" />
          <Card image="https://static.tvtropes.org/pmwiki/pub/images/strong_sad_9578.png" />
          <Card image="https://static.tvtropes.org/pmwiki/pub/images/180px-The_Cheat_Character_Video_5480.PNG" />
          <Card image="https://static.tvtropes.org/pmwiki/pub/images/bubs_5676.png" />
        </div>
      </div>
    </div>
  );
}

export default App;
