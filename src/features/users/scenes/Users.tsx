/* eslint-disable */
import React, { useState, useEffect } from "react"
import { observer } from "mobx-react"
import * as LibraryComponents from "@df/library/components"
import * as Models from "../models"
import * as Utils from "@df/library/utils"
import moment from "moment"
import * as Features from "@df/features"
import Contexts from "@df/library/stores"
import BootstrapTable from "react-bootstrap-table-next"
import cellEditFactory, { Type } from "react-bootstrap-table2-editor"
import ToolkitProvider, { Search, CSVExport } from "react-bootstrap-table2-toolkit"
import * as Services from "../services"
import { Container } from "reactstrap"

const { SearchBar, ClearSearchButton } = Search
const { ExportCSVButton } = CSVExport

const Users = observer(() => {
  const rootStore = React.useContext(Contexts.rootStore)
  const [errors, setErrors] = useState<Models.Users>()
  const [deleteUser, setDeleteUser] = useState<any>({})

  useEffect(() => {
    rootStore.userStore.fetchUserList()
  }, [])

  return (
    <>
      <Container fluid>
        <LibraryComponents.Header>
          <LibraryComponents.PageHeading title="User" />
        </LibraryComponents.Header>
        <div className=" mx-auto  p-4  flex-wrap">
          <div className="m-1  rounded-lg shadow-xl" style={{ overflowX: "scroll" }}>
            <ToolkitProvider
              keyField="id"
              data={rootStore.userStore.userList || []}
              columns={[
                {
                  dataField: "mobileNo",
                  text: "Mobile Number",
                  editable: false,
                },
                {
                  dataField: "firstName",
                  text: "Name",
                  editable: false,
                  formatter: (cellContent, row) => (
                    <>
                      <label>{`${row.fristName !== undefined ? row.fristName : ""} ${
                        row.lastName !== undefined ? row.lastName : ""
                      }`}</label>
                    </>
                  ),
                },
                {
                  dataField: "email",
                  text: "Email",
                  editable: false,
                },
              ]}
              search
              exportCSV={{
                fileName: `users_${moment(new Date()).format(
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
      </Container>
    </>
  )
})

export default Users
