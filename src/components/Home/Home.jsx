import React, { useState, useEffect, lazy, Suspense } from 'react';
import Art from '../Art';
import Tabs from '../Tabs';
const Accordion = lazy(() => import('../Accordion'));
const StarRatings = lazy(() => import('../StarRatings'));
const ImageCarousel = lazy(() => import('../ImageCarousel'));
const Tab1 = lazy(() => import('../Tab1'));
const Timer = lazy(() => import('../Timer'));
const ProgressBar = lazy(() => import('../ProgressBar'));

export default function Home({ defaultTab = 0 }) {
  const [selectedTab, setSelectedTab] = useState(defaultTab);
  const tabs = [
    {
      value: 0,
      name: 'JS',
    },
    {
      value: 1,
      name: 'Accordion',
    },
    {
      value: 2,
      name: 'Star Ratings',
    },
    {
      value: 3,
      name: 'Image Carousel',
    },
    {
      value: 4,
      name: 'Timer',
    },
    {
      value: 5,
      name: 'Art',
    },
    {
      value: 6,
      name: 'Progress Bar',
    },
  ];

  return (
    <div>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      >
        {selectedTab === 0 && (
          <Suspense fallback={<p>Loading</p>}>
            <Tab1 />
          </Suspense>
        )}
        {selectedTab === 1 && (
          <Suspense fallback={<p>Loading</p>}>
            <Accordion
              title="This is title"
              description="This is description"
            />
          </Suspense>
        )}
        {selectedTab === 2 && (
          <Suspense fallback={<p>Loading</p>}>
            <StarRatings />
          </Suspense>
        )}
        {selectedTab === 3 && (
          <Suspense fallback={<p>Loading</p>}>
            <ImageCarousel />
          </Suspense>
        )}
        {selectedTab === 4 && (
          <Suspense fallback={<p>Loading</p>}>
            <Timer />
          </Suspense>
        )}
        {selectedTab === 5 && (
          <Suspense fallback={<p>Loading</p>}>
            <Art />
          </Suspense>
        )}
        {selectedTab === 6 && (
          <Suspense fallback={<p>Loading</p>}>
            <ProgressBar />
          </Suspense>
        )}
      </Tabs>
    </div>
  );
}