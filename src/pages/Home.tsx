import React from 'react';
import parse, { Element } from 'html-react-parser';
import rawHtml from './helllo_rendered.html?raw';
import PowerfulFeatures from '../components/PowerfulFeatures';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

const options = {
  replace: (domNode: any) => {
    if (domNode instanceof Element) {
      if (domNode.name === 'header') {
        return <Header />;
      }
      if (domNode.attribs && domNode.attribs.id === 'home') {
        return <HeroSection />;
      }
      if (domNode.attribs && domNode.attribs.id === 'features') {
        return <PowerfulFeatures />;
      }
    }
  }
};

const Home: React.FC = () => {
  return (
    <div className="helllo-root">
      {parse(rawHtml, options)}
    </div>
  );
};

export default Home;
