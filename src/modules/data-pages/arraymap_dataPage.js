import React from "react"
import { Layout } from "../../components/Layout"
import parametersConfig from "../shared/searchParameters.yaml"
import requestTypesConfig from "./arraymap_searchParameters.yaml"
import BiosamplesSearchPanel from "../../components/searchForm/BiosamplesSearchPanel"
import Panel from "../../components/Panel"

export default function arraymap_dataPage({ cytoBands }) {
  return (
    <Layout title="Search arrayMap Samples" headline="arrayMap">
      <Panel heading="Genomic CNV Arrays" className="content">
        <div style={{ display: "flex" }}>
          The arrayMap data represents a subset of the Progenetix collection for
          which the probe-specific array has been used for data generation. For
          these samples, individual array probe plots will be accessible through
          the sample details pages.
          <img
            src={"/img/chroplot-GSM491153-chro9-labeled.svg"}
            style={{
              height: "160px",
              margin: "-70px -24px -18px 0"
            }}
          />
        </div>
      </Panel>
      <BiosamplesSearchPanel
        parametersConfig={parametersConfig}
        requestTypesConfig={requestTypesConfig}
        cytoBands={cytoBands}
      />
    </Layout>
  )
}
