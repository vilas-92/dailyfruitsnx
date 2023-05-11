/* eslint-disable */
import React, { useEffect } from "react"
import { observer } from "mobx-react"
import * as LibraryComponents from "@df/library/components"
import moment from "moment"
import Contexts from "@df/library/stores"
import BootstrapTable from "react-bootstrap-table-next"
import ToolkitProvider, { Search, CSVExport } from "react-bootstrap-table2-toolkit"
import { Container } from "reactstrap"
import { useHistory, useLocation } from "react-router-dom"
import * as Services from "../services"

const { SearchBar, ClearSearchButton } = Search
const { ExportCSVButton } = CSVExport

const OrderDetials = observer(() => {
  const history = useHistory()
  const location = useLocation()
  const rootStore = React.useContext(Contexts.rootStore)
  const [item, setItem] = React.useState<any>()

  useEffect(() => {
    setItem(location.item)
    console.log({ item: location.item })
  }, [location])

  return (
    <>
      <LibraryComponents.Button
        size="small"
        type="solid"
        icon={LibraryComponents.Icons.BackArrow}
        onClick={() => {
          window.history.back()
        }}
      >
        Go Back
      </LibraryComponents.Button>
      {item && (
        <Container fluid>
          <LibraryComponents.Header>
            <LibraryComponents.PageHeading title="Order Detials" />
          </LibraryComponents.Header>
          <div className="p-2 rounded-lg shadow-xl">
            <LibraryComponents.Grid cols={2}>
              <LibraryComponents.List
                direction="col"
                space={4}
                justify="stretch"
                fill
              >
                <LibraryComponents.Form.InputWrapper label="Mobile No" id="mobileNo">
                  <label>{`${item.user.mobileNo} `}</label>
                </LibraryComponents.Form.InputWrapper>
                <LibraryComponents.Form.InputWrapper label="Name" id="name">
                  <label>{`${
                    item.user.fristName !== undefined ? item.user.fristName : ""
                  } ${
                    item.user.lastName !== undefined ? item.user.lastName : ""
                  }`}</label>
                </LibraryComponents.Form.InputWrapper>
                <LibraryComponents.Form.InputWrapper label="Address" id="address">
                  <label>{`${item.location.address}`}</label>
                </LibraryComponents.Form.InputWrapper>
              </LibraryComponents.List>
              <LibraryComponents.List
                direction="col"
                space={4}
                justify="stretch"
                fill
              >
                <LibraryComponents.Form.InputWrapper label="Total Items" id="item">
                  <label>{`${item.checkout.item} `}</label>
                </LibraryComponents.Form.InputWrapper>
                <LibraryComponents.Form.InputWrapper label="Date" id="date">
                  <label>{`${moment(item.dateOfEntry).format(
                    "YYYY-MM-DD h:mm:ss a"
                  )} `}</label>
                </LibraryComponents.Form.InputWrapper>
                <LibraryComponents.Form.InputWrapper label="Status" id="staus">
                  <label>{`${item.status}`}</label>
                </LibraryComponents.Form.InputWrapper>
              </LibraryComponents.List>
            </LibraryComponents.Grid>
          </div>

          <div className="mx-auto flex-wrap">
            <div
              className="p-2 rounded-lg shadow-xl"
              style={{ overflowX: "scroll" }}
            >
              <ToolkitProvider
                keyField="id"
                data={Array.from(item.myCart)}
                columns={[
                  {
                    dataField: "image",
                    text: "Image",
                    editable: false,
                    formatter: (cell, row) => {
                      return (
                        <>
                          <img
                            src={row.image}
                            style={{ width: 100, height: 100 }}
                            alt="product"
                          />
                        </>
                      )
                    },
                  },
                  {
                    dataField: "title",
                    text: "Title",
                    headerStyle: { minWidth: "150px" },
                    editable: false,
                  },
                  {
                    dataField: "qty",
                    text: "Qty",
                    headerStyle: { minWidth: "150px" },
                    editable: false,
                  },
                ]}
                search
                exportCSV={{
                  fileName: `ordersDetails_${moment(new Date()).format(
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
                    />
                  </div>
                )}
              </ToolkitProvider>
            </div>
          </div>
          <br />
          <div className="p-2 rounded-lg shadow-xl">
            <LibraryComponents.Grid cols={3}>
              <LibraryComponents.Form.InputWrapper label="Total Amount" id="amount">
                <label>{`${item.checkout.toPay} `}</label>
              </LibraryComponents.Form.InputWrapper>
              <LibraryComponents.Form.InputWrapper
                label="Razorpay payment_id"
                id="payment_id"
              >
                <h5 style={{ color: "green" }}>Success</h5>
                <label>{`${item.paymentDetails.razorpay_payment_id}`}</label>
              </LibraryComponents.Form.InputWrapper>
              <LibraryComponents.Form.InputWrapper label="Change Status" id="staus">
                <select
                  name="defualtLab"
                  className="leading-4 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border border-gray-300 rounded-md"
                  onChange={(e) => {
                    const status = e.target.value
                    Services.statusChange({ id: item._id, mobileNo: item.user.mobileNo, status }).then((res) => {
                      if (res.status === 200) {
                        LibraryComponents.ToastsStore.success("Status changed.")
                        rootStore.orderStore.fetchOrderList()
                        window.history.back()
                      }
                    })
                    console.log({ status })
                  }}
                >
                  <option selected>Select</option>
                  {[
                    { title: "Pending" },
                    { title: "Reject" },
                    { title: "Ready to delivery" },
                    { title: "Delivery Success" },
                  ].map((item: any, index: number) => (
                    <option key={item.title} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </LibraryComponents.Form.InputWrapper>
            </LibraryComponents.Grid>
          </div>
        </Container>
      )}
    </>
  )
})

export default OrderDetials
