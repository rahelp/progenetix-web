import React from "react"
import { Layout } from "../../components/layouts/Layout"
import { usePublicationList } from "../../hooks/api"
import { Loader } from "../../components/Loader"
import Table, { TooltipHeader } from "../../components/Table"
import { EpmcLink } from "./EpmcUrl"
import cn from "classnames"

export default function PublicationsListPage() {
  return (
    <Layout title="Publications" headline="Progenetix Publication Collection">
      <article className="mb-6">
        <p>
          The current page lists articles describing whole genome screening
          (WGS, WES, aCGH, cCGH) experiments in cancer, registered in the
          Progenetix publication collection.
        </p>
        <p>
          Please <a href="mailto:contact@progenetix.org">contact us</a> to alert
          us about additional articles you are aware of.
        </p>
      </article>
      <PublicationTableLoader />
    </Layout>
  )
}

function PublicationTableLoader() {
  const { data, error, isLoading } = usePublicationList()
  const columns = React.useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
        // eslint-disable-next-line react/display-name
        Cell: (cellInfo) => (
          <a
            href={`/publications/details?id=${cellInfo.value}&filterPrecision=exact`}
          >
            {cellInfo.value}
          </a>
        )
      },
      {
        Header: "Publication",
        accessor: "label",
        // eslint-disable-next-line react/display-name
        Cell: ({ value, row: { original } }) => {
          return (
            <>
              <div>{value}</div>
              <div>
                {original.journal} <EpmcLink publicationId={original.id} />
              </div>
            </>
          )
        }
      },
      {
        Header: "Samples",
        columns: [
          {
            Header: "cCGH",
            accessor: "counts.ccgh",
            Cell: CountCell
          },
          {
            Header: "aCGH",
            accessor: "counts.acgh",
            Cell: CountCell
          },
          {
            Header: "WES",
            accessor: "counts.wes",
            Cell: CountCell
          },
          {
            Header: "WGS",
            accessor: "counts.wgs",
            Cell: CountCell
          },
          {
            Header: TooltipHeader("pgx", "Progenetix"),
            accessor: "counts.progenetix",
            Cell: CountCell
          },
          {
            Header: TooltipHeader("am", "Arraymap"),
            accessor: "counts.arraymap",
            Cell: CountCell
          }
        ]
      },
      { accessor: "authors" },
      { accessor: "title" }
    ],
    []
  )

  return (
    <Loader isLoading={isLoading} hasError={error} background>
      <Table
        columns={columns}
        data={data}
        pageSize={15}
        hasGlobalFilter
        hiddenColumns={["authors", "title"]}
      />
    </Loader>
  )
}

function CountCell({ value }) {
  return (
    <span className={cn(value === 0 && "has-text-grey-light")}>{value}</span>
  )
}
