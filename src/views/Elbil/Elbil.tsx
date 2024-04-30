import { Page, PageSection } from "../../components/Page/index";
import Subheader from "../../components/Subheader/index";
import { anchorLinks } from "./data/anchor-links";
import { crumbs } from "./data/breadcrumbs";
import {
  GridListCardBrands,
  GridListCardProducts,
  GridListCardTrialRuns,
  OverflowControl,
} from "./wrapper";

import {
  popModelsProducts,
  goFarModelsProducts,
  trademarkBrands,
  trialRuns,
} from "./cards";

export default function Elbil() {
  return (
    <Page>
      <Subheader
        pageName="Elbil"
        anchorLinks={anchorLinks}
        breadcrumbs={crumbs}
      />
      <PageSection
        id="section-popular-models"
        heading="Populära modeller"
        aria-label="Populära modeller"
      >
        <OverflowControl>
          <GridListCardProducts>
            {popModelsProducts.length > 0 ? (
              popModelsProducts
            ) : (
              <div>Oops! Could not find any products :(</div>
            )}
          </GridListCardProducts>
        </OverflowControl>
      </PageSection>
      <PageSection
        id="section-go-far-models"
        heading="Elbilar som tar dig långt"
        aria-label="Elbilar som tar dig långt"
        showMoreLink
      >
        <OverflowControl>
          <GridListCardProducts>
            {goFarModelsProducts.length > 0 ? (
              goFarModelsProducts
            ) : (
              <div>Oops! Could not find any products :(</div>
            )}
          </GridListCardProducts>
        </OverflowControl>
      </PageSection>
      <PageSection
        id="section-trademarks"
        heading="Varumärken"
        aria-label="Varumärken"
      >
        <OverflowControl>
          <GridListCardBrands>
            {trademarkBrands.length > 0 ? (
              trademarkBrands
            ) : (
              <div>Oops! Could not find any trademarks :(</div>
            )}
          </GridListCardBrands>
        </OverflowControl>
      </PageSection>
      <PageSection
        id="section-trial-runs"
        heading="Provkörningar"
        aria-label="Provkörningar"
      >
        <OverflowControl>
          <GridListCardTrialRuns>
            {trialRuns.length > 0 ? (
              trialRuns
            ) : (
              <div>Oops! Could not find any videos :(</div>
            )}
          </GridListCardTrialRuns>
        </OverflowControl>
      </PageSection>
    </Page>
  );
}
