import CardProduct from "../../components/CardProduct/index";
import CardBrand from "../../components/CardBrand/index";
import CardTrialRuns from "../../components/CardTrialRuns/index";
import { elbilar } from "./data/products";
import { trademarks } from "./data/trademarks";
import { provkorningar } from "./data/trial-runs";
import { parsePrice } from "../../layout/helpers";
import { css } from "@linaria/core";

const linkClass = css`
  color: var(--c-text-primary);
  text-decoration: none;
`;

export const popModelsProducts = elbilar.popular.map((item, i: number) => {
  return (
    <CardProduct
      key={i + item.model}
      imgSrc={`/photos/cars/electric/${item.imgSrc}`}
      imgAlt={`Image of a ${item.model} with a scenic background`}
      title={item.model}
      numListings={item.numListings}
      lowestPrice={parsePrice(item.lowestPrice) as string}
    />
  );
});

export const goFarModelsProducts = elbilar.goFar.map((item, i: number) => {
  return (
    <CardProduct
      key={i + item.model}
      imgSrc={`/photos/cars/electric/${item.imgSrc}`}
      imgAlt={`Image of a ${item.model} with a scenic background`}
      title={item.model}
      numListings={item.numListings}
      lowestPrice={parsePrice(item.lowestPrice) as string}
    />
  );
});

export const trademarkBrands = trademarks.map((item, i: number) => {
  return (
    <CardBrand
      key={i + item.name}
      imgSrc={`/icons/trademarks/${item.iconSrc}`}
      imgAlt={`${item.name} with a scenic background`}
      title={item.name}
      numCars={item.numCars}
      numModels={item.numModels}
    />
  );
});

export const trialRuns = provkorningar.map((item, i: number) => {
  return (
    <CardTrialRuns
      key={i + item.model}
      imgSrc={`/photos/trialruns/${item.imgSrc}`}
      imgAlt={`${item.model}`}
      title={item.model}
    />
  );
});
