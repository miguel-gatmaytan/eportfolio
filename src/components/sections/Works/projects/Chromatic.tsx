import * as React from "react";
import styled from "styled-components";
import { SmallHeader } from "components/headers";
import { Carousel } from "react-responsive-carousel";
import bg from "assets/img/chroma.png";

const TextContainer = styled.div`
  padding: 60px;
  height: 100%;
`;

const OverlayDiv = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Chromatic = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <OverlayDiv />
        {/*@ts-ignore */}
        <Carousel infiniteLoop showThumbs={false}>
          <TextContainer>
            <SmallHeader>Problem:</SmallHeader>
            Visual Regression Testing was non-existent for the core components
            at data.ai. Though the components had their own tests, the styles of
            the components weren&apos;t being tracked and thus, small bugs
            around styling would happen from time to time.
          </TextContainer>
          <TextContainer>
            <SmallHeader>Solution to Problem:</SmallHeader>
            Introduce a visual regression testing tool such as Chromatic to gain
            instant visual regression testing on our core components.
          </TextContainer>
          <TextContainer>
            <SmallHeader>Complexity:</SmallHeader>
            We had a limited budget, and the number of snapshots taken per month
            scaled according to budget. We also needed a way to ensure our
            developers knew if their pipelines were failing due to Visual
            Regression tests.
          </TextContainer>
          <TextContainer>
            <SmallHeader>Solution to Complexity:</SmallHeader>
            Use Chromatic&apos;s TurboSnap feature to ensure snapshots would
            only be taken against components that were updated. Implement a
            webhook to slack to allow Chromatic to relay pipeline information to
            developers submitting merge requests.
          </TextContainer>
          <TextContainer>
            <SmallHeader>Redundancies:</SmallHeader>
            Even with TurboSnap active, there were times when we reached our
            snapshot limit due to refactoring of the codebase. To maintain
            visual regression testing, we would pause snapshots on branches and
            only run them on the master branch, should we be approaching the
            snapshot limit.
          </TextContainer>
        </Carousel>
      </div>
    </div>
  );
};

export default Chromatic;
