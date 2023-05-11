/* eslint-disable */
import React, { useEffect } from "react"
import { observer } from "mobx-react"
import * as LibraryComponents from "@df/library/components"
import moment from "moment"
import Contexts from "@df/library/stores"
import BootstrapTable from "react-bootstrap-table-next"
import ToolkitProvider, { Search, CSVExport } from "react-bootstrap-table2-toolkit"
import { Container } from "reactstrap"
import { useHistory } from "react-router-dom"

const { SearchBar, ClearSearchButton } = Search
const { ExportCSVButton } = CSVExport

const Order = observer(() => {
  const history = useHistory()
  const rootStore = React.useContext(Contexts.rootStore)

  useEffect(() => {
    rootStore.orderStore.fetchOrderList()
  }, [])

  const tableRowEvents = {
    onClick: (e, row, rowIndex) => {
      history.push({
        pathname: "/order/orderDetials",
        item: row,
      })
    },
  }

  return (
    <>
      <Container fluid>
        <LibraryComponents.Header>
          <LibraryComponents.PageHeading title="Order List" />
        </LibraryComponents.Header>
        <div className=" mx-auto flex-wrap">
          <div className="p-2 rounded-lg shadow-xl" style={{ overflowX: "scroll" }}>
            <ToolkitProvider
              keyField="id"
              data={rootStore.orderStore.orderList || []}
              columns={[
                {
                  dataField: "user.mobileNo",
                  text: "Mobile Number",
                  editable: false,
                  headerStyle: { minWidth: "150px" },
                },
                {
                  dataField: "fullName",
                  text: "Name",
                  headerStyle: { minWidth: "150px" },
                  editable: false,
                  formatter: (cellContent, row) => (
                    <>
                      <label>{`${
                        row.user.fristName !== undefined ? row.user.fristName : ""
                      } ${
                        row.user.lastName !== undefined ? row.user.lastName : ""
                      }`}</label>
                    </>
                  ),
                },
                {
                  dataField: "location.address",
                  text: "Address",
                  headerStyle: { minWidth: "250px" },
                  editable: false,
                },
                {
                  dataField: "checkout.item",
                  text: "Items",
                  headerStyle: { minWidth: "150px" },
                  editable: false,
                },
                {
                  dataField: "checkout.toPay",
                  text: "Amount",
                  headerStyle: { minWidth: "150px" },
                  editable: false,
                },
                {
                  dataField: "paymentDetails.razorpay_payment_id",
                  text: "Razorpay payment_id",
                  headerStyle: { minWidth: "150px" },
                  editable: false,
                  formatter: (cell, row) => {
                    return (
                      <>
                        <h5 style={{ color: "green" }}>Success</h5>
                        <span>{row.paymentDetails.razorpay_payment_id}</span>
                      </>
                    )
                  },
                },
                {
                  dataField: "dateOfEntry",
                  text: "Date",
                  headerStyle: { minWidth: "250px" },
                  editable: false,
                  formatter: (cell, row) => {
                    return moment(row.exipreDate).format("YYYY-MM-DD h:mm:ss a")
                  },
                },
                {
                  dataField: "status",
                  text: "Status",
                  headerStyle: { minWidth: "150px" },
                  editable: false,
                },
              ]}
              search
              exportCSV={{
                fileName: `orders_${moment(new Date()).format(
                  "YYYY-MM-DD HH:mm"
                )}.csv`,
                noAutoBOM: false,
                blobType: "text/csv;charset=ansi",
              }}
            >
              {(props) => (
                <div>
                  <SearchBar {...props.searchProps} />
                  <ClearSearchButton
                    className={`inline-flex ml-4 bg-gray-500 items-center  small outline shadow-sm  font-medium  disabled:opacity-50 disabled:cursor-not-allowed text-center`}
                    {...props.searchProps}
                  />
                  <ExportCSVButton
                    className={`inline-flex ml-2 bg-gray-500 items-center  small outline shadow-sm  font-medium  disabled:opacity-50 disabled:cursor-not-allowed text-center`}
                    {...props.csvProps}
                  >
                    Export CSV!!
                  </ExportCSVButton>
                  <hr />
                  <BootstrapTable
                    {...props.baseProps}
                    noDataIndication="Table is Empty"
                    hover
                    rowEvents={tableRowEvents}
                  />
                </div>
              )}
            </ToolkitProvider>
          </div>
        </div>
      </Container>
    </>
  )
})

export default Order
