import React, {useEffect, useState} from 'react';
import {AdaptivityProvider, AppRoot, ConfigProvider, SplitCol, SplitLayout, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './styles/globals.css'

import Home from './panels/Home';
import OnBoarding from "./panels/Onboarding";
import Ask from "./panels/Ask";
import Templates from "./panels/Templates";
import Calendar from "./panels/Calendar";

const App = () => {
  const [activePanel, setActivePanel] = useState('onboarding');
  const [activeMood, setActiveMood] = useState(0);
  const [activeText, setActiveText] = useState('');

  useEffect(() => {
    const next = () => {
      setTimeout(() => {
        setActivePanel('home')
      }, 2000)
    }

    if (activePanel === 'onboarding') {
      next();
    }
  }, []);

  const go = e => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol>
              <View activePanel={activePanel}>
                <Home id='home' go={go} setActiveMood={setActiveMood} setActivePanel={setActivePanel}/>
                <OnBoarding id='onboarding' go={go}/>
                <Ask id='ask' go={go} activeMood={activeMood} setActivePanel={setActivePanel} activeText={activeText}
                     setActiveText={setActiveText}/>
                <Templates id='templates' setActivePanel={setActivePanel} activeMood={activeMood}
                           activeText={activeText} setActiveText={setActiveText}/>
                <Calendar id='calendar'/>
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

export default App;
