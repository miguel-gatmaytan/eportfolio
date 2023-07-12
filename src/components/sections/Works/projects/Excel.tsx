import * as React from "react";
import styled from "styled-components";
import { SmallHeader } from "components/headers";
import { Carousel } from "react-responsive-carousel";
import bg from "assets/img/dai.png";

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

const Excel = () => {
  return (
    <div>
      <SmallHeader>
        Article: <br />
        <a
          href="
            https://www.data.ai/en/insights/product-announcements/excel-is-your-new-app-growth-dashboard/"
          target="_blank"
        >
          https://www.data.ai/en/insights/product-announcements/excel-is-your-new-app-growth-dashboard/
        </a>
      </SmallHeader>
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
            Users of data.ai’s API were using Excel to manually input values
            from the API to track certain datasets. This work would take place
            anywhere between every week to every month and would take at least
            2-3 days to complete.
          </TextContainer>
          <TextContainer>
            <SmallHeader>Solution to Problem:</SmallHeader>
            Remove the manual work involved when retrieving data, and allow our
            end users to input parameters to build their reports, and have these
            reports automatically update.
          </TextContainer>
          <TextContainer>
            <SmallHeader>Complexity:</SmallHeader>
            Opening up our API in Excel meant that users could run wild with
            their spreadsheets. Some customers anticipated several hundred
            thousand individual calls to the API with their spreadsheets.
          </TextContainer>
          <TextContainer>
            <SmallHeader>Solution to Complexity:</SmallHeader>
            Implement a batching system that would alleviate some pressure from
            the backend and combine multiple API calls together using data.ai’s
            proprietary query language. This meant that we would be able to
            combine 100 calls into a single one, if enough of the parameters
            matched.
          </TextContainer>
          <TextContainer>
            <SmallHeader>Redundancies:</SmallHeader>
            If the batcher wasn’t enough, we also introduced rate limiting and
            only allowed a certain number of calls to fire at once, with the
            rest getting put into a queue. This meant that the automation aspect
            of the product wasn’t lost, but rather throttled if the customer
            exceeds anticipated usage limits.
          </TextContainer>
        </Carousel>
      </div>
    </div>
  );
};

export default Excel;
