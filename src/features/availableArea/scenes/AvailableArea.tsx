/* eslint-disable */
import React, { useState, useRef } from "react"
import { observer } from "mobx-react"
import * as LibraryComponents from "@df/library/components"
import * as LibraryModels from "@df/library/models"
import Contexts from "@df/library/stores"
import * as Services from "../services"

import BootstrapTable from "react-bootstrap-table-next"
import cellEditFactory, { Type } from "react-bootstrap-table2-editor"
import ToolkitProvider, { Search, CSVExport } from "react-bootstrap-table2-toolkit"
import moment from "moment"

const { SearchBar, ClearSearchButton } = Search
const { ExportCSVButton } = CSVExport

const AvailableArea = observer(() => {
  const rootStore = React.useContext(Contexts.rootStore)
  const [deleteItem, setDeleteItem] = useState<any>({})

  const pincodeInput = useRef()

  const afterSaveCell = (oldValue, newValue, row, column) => {
    console.log({ oldValue, newValue })
    if (oldValue !== newValue) {
      rootStore.setProcessLoading(true)
      Services.updateSingleFiled({
        newValue,
        dataField: column.dataField,
        id: row._id,
      }).then((res) => {
        rootStore.setProcessLoading(false)
        if (res.status === 200) {
          rootStore.availableAreaStore.fetchListAvailableArea()
          LibraryComponents.ToastsStore.success(`User update.`)
        }
      })
    }
  }

  return (
    <>
      <LibraryComponents.Header>
        <LibraryComponents.PageHeading
          title="Available Area"
          subTitle="Add, Edit & Delete availableArea"
        />
      </LibraryComponents.Header>
      <div className=" mx-auto  p-4  flex-wrap">
        <div className="m-1 p-2 rounded-lg shadow-xl">
          <LibraryComponents.Grid cols={2}>
            <LibraryComponents.List direction="col" space={4} justify="stretch" fill>
              <LibraryComponents.Form.Input
                label="City"
                id="city"
                placeholder="City"
                value={rootStore.availableAreaStore.availableArea?.city}
                onChange={(city) => {
                  rootStore.availableAreaStore.updateAvailableArea({
                    ...rootStore.availableAreaStore.availableArea,
                    city,
                  })
                }}
              />

              <LibraryComponents.List direction="row" space={4} justify="center">
                <LibraryComponents.Form.Input
                  ref={pincodeInput}
                  type="number"
                  label="Pincode"
                  id="pincode"
                  placeholder="Pincode"
                  value={rootStore.availableAreaStore.availableArea?.pincode}
                  onChange={(pincode) => {
                    rootStore.availableAreaStore.updateAvailableArea({
                      ...rootStore.availableAreaStore.availableArea,
                      pincode,
                    })
                  }}
                />
                <div className="mt-3">
                  <LibraryComponents.Button
                    size="medium"
                    type="solid"
                    onClick={() => {
                      if (
                        rootStore.availableAreaStore.availableArea?.pincode !==
                        undefined
                      ) {
                        rootStore.availableAreaStore.pincodeAppend(
                          Number(
                            rootStore.availableAreaStore.availableArea?.pincode
                          ) || 0
                        )
                        rootStore.availableAreaStore.updateAvailableArea({
                          ...rootStore.availableAreaStore.availableArea,
                          pincode: "",
                        })
                      } else {
                        alert("Please enter a pincode.")
                      }
                    }}
                  >
                    Add
                  </LibraryComponents.Button>
                </div>
              </LibraryComponents.List>
              <LibraryComponents.List space={2} direction="row" justify="center">
                {rootStore.availableAreaStore.arrPincode?.map((item, index) => (
                  <LibraryComponents.Button
                    key={index}
                    size="medium"
                    type="solid"
                    icon={LibraryComponents.Icons.Remove}
                    onClick={() => {
                      const firstArr =
                        rootStore.availableAreaStore.arrPincode?.slice(0, index) ||
                        []
                      const secondArr =
                        rootStore.availableAreaStore.arrPincode?.slice(index + 1) ||
                        []
                      const newArrPincode = [...firstArr, ...secondArr]
                      console.log({ newArrPincode })
                      rootStore.availableAreaStore.arrPincode = newArrPincode
                    }}
                  >
                    {item}
                  </LibraryComponents.Button>
                ))}
              </LibraryComponents.List>
              <LibraryComponents.Form.Input
                type="number"
                label="Delivery Charge"
                id="delivertCharge"
                placeholder="Delivery Charge"
                value={rootStore.availableAreaStore.availableArea?.deliveryCharge}
                onChange={(deliveryCharge) => {
                  rootStore.availableAreaStore.updateAvailableArea({
                    ...rootStore.availableAreaStore.availableArea,
                    deliveryCharge,
                  })
                }}
              />
            </LibraryComponents.List>
          </LibraryComponents.Grid>
          <br />
          <LibraryComponents.List direction="row" space={3} align="center">
            <LibraryComponents.Button
              size="medium"
              type="solid"
              icon={LibraryComponents.Icons.Save}
              onClick={() => {
                if (rootStore.availableAreaStore.availableArea?.pincode !== "") {
                  rootStore.availableAreaStore.pincodeAppend(
                    Number(rootStore.availableAreaStore.availableArea?.pincode) || 0
                  )
                  rootStore.availableAreaStore.updateAvailableArea({
                    ...rootStore.availableAreaStore.availableArea,
                    pincode: "",
                  })
                }
                if (
                  rootStore.availableAreaStore.availableArea?.city !== "" &&
                  rootStore.availableAreaStore.arrPincode?.length !== 0
                ) {
                  rootStore.setProcessLoading(true)
                  Services.addAvailableArea({
                    ...rootStore.availableAreaStore.availableArea,
                    arrPincode: rootStore.availableAreaStore.arrPincode || [],
                  }).then((res) => {
                    if (res.status === LibraryModels.StatusCode.CREATED) {
                      LibraryComponents.ToastsStore.success(`Delivery created.`)
                      setTimeout(() => {
                        window.location.reload()
                      }, 2000)
                    }
                  })
                } else {
                  LibraryComponents.ToastsStore.warning(
                    "Please enter all information!"
                  )
                }
              }}
            >
              Save
            </LibraryComponents.Button>
            <LibraryComponents.Button
              size="medium"
              type="outline"
              icon={LibraryComponents.Icons.Remove}
              onClick={() => {
                // rootStore.userStore.clear()
              }}
            >
              Clear
            </LibraryComponents.Button>
          </LibraryComponents.List>
        </div>
        <br />
        <div className="m-1 p-2 rounded-lg shadow-xl overflow-auto">
          <ToolkitProvider
            keyField="id"
            data={rootStore.availableAreaStore.listAvailableArea || []}
            columns={[
              {
                dataField: "city",
                text: "City",
              },
              {
                dataField: "arrPincode",
                text: "Pincodes",
                formatter: (cellContent, row) => (
                  <>
                    <LibraryComponents.List
                      space={2}
                      direction="row"
                      justify="center"
                    >
                      {row.arrPincode.map((item, index) => (
                        <LibraryComponents.Button
                          key={index}
                          size="medium"
                          type="solid"
                          icon={LibraryComponents.Icons.Remove}
                          onClick={() => {
                            const firstArr = row.arrPincode?.slice(0, index) || []
                            const secondArr = row.arrPincode.slice(index + 1) || []
                            const newPincode = [...firstArr, ...secondArr]
                            Services.updateSingleFiled({
                              id: row._id,
                              dataField: "arrPincode",
                              newValue: newPincode,
                            }).then((res) => {
                              console.log({ res })
                              rootStore.availableAreaStore.fetchListAvailableArea()
                            })
                          }}
                        >
                          {item}
                        </LibraryComponents.Button>
                      ))}
                    </LibraryComponents.List>
                  </>
                ),
                editorRenderer: (
                  editorProps,
                  value,
                  row,
                  column,
                  rowIndex,
                  columnIndex
                ) => (
                  <>
                    <LibraryComponents.List
                      direction="row"
                      space={4}
                      justify="stretch"
                      fill
                    >
                      <LibraryComponents.Form.Input
                        label="Pincode"
                        id="pincode"
                        placeholder="Pincode"
                        value={rootStore.availableAreaStore.availableArea?.pincode}
                        onChange={(pincode) => {
                          rootStore.availableAreaStore.updateAvailableArea({
                            ...rootStore.availableAreaStore.availableArea,
                            pincode,
                          })
                        }}
                      />
                      <div className="mt-4">
                        <LibraryComponents.Button
                          size="medium"
                          type="solid"
                          onClick={() => {
                            const mainPincodes: [number] = row.arrPincode
                            if (
                              rootStore.availableAreaStore.availableArea?.pincode !==
                              ""
                            ) {
                              mainPincodes.push(
                                Number(
                                  rootStore.availableAreaStore.availableArea?.pincode
                                ) || 0
                              )
                              Services.updateSingleFiled({
                                id: row._id,
                                dataField: "arrPincode",
                                newValue: mainPincodes,
                              }).then((res) => {
                                rootStore.availableAreaStore.updateAvailableArea({
                                  ...rootStore.availableAreaStore.availableArea,
                                  pincode: "",
                                })
                              })
                            }
                          }}
                        >
                          Add
                        </LibraryComponents.Button>
                      </div>
                    </LibraryComponents.List>
                    <br />
                    <LibraryComponents.List
                      space={2}
                      direction="row"
                      justify="center"
                    >
                      {row.arrPincode.map((item, index) => (
                        <LibraryComponents.Button
                          key={index}
                          size="medium"
                          type="solid"
                          icon={LibraryComponents.Icons.Remove}
                          onClick={() => {
                            const firstArr = row.arrPincode?.slice(0, index) || []
                            const secondArr = row.arrPincode.slice(index + 1) || []
                            const newPincodes = [...firstArr, ...secondArr]
                            Services.updateSingleFiled({
                              id: row._id,
                              dataField: "arrPincode",
                              newValue: newPincodes,
                            }).then((res) => {
                              rootStore.availableAreaStore.fetchListAvailableArea()
                            })
                          }}
                        >
                          {item}
                        </LibraryComponents.Button>
                      ))}
                    </LibraryComponents.List>
                  </>
                ),
              },
              {
                dataField: "deliveryCharge",
                text: "Delivery Charge",
                editorRenderer: (
                  editorProps,
                  value,
                  row,
                  column,
                  rowIndex,
                  columnIndex
                ) => (
                  <>
                    <LibraryComponents.Form.Input
                      type="number"
                      label="Delivery Charge"
                      id="deliveryCharge"
                      placeholder="Delivery Charge"
                      onBlur={(deliveryCharge) => {
                        Services.updateSingleFiled({
                          id: row._id,
                          dataField: "deliveryCharge",
                          newValue: Number(deliveryCharge),
                        }).then((res) => {
                          rootStore.availableAreaStore.fetchListAvailableArea()
                          LibraryComponents.ToastsStore.success(`User update.`)
                        })
                      }}
                    />
                  </>
                ),
                defaultValue: 0,
              },
              {
                dataField: "opration",
                text: "Delete",
                editable: false,
                csvExport: false,
                formatter: (cellContent, row) => (
                  <>
                    <LibraryComponents.Button
                      size="small"
                      type="outline"
                      icon={LibraryComponents.Icons.Remove}
                      onClick={() => {
                        setDeleteItem({
                          show: true,
                          id: row._id,
                          title: "Are you sure?",
                          body: `Delete ${row.category}!`,
                        })
                      }}
                    >
                      Delete
                    </LibraryComponents.Button>
                  </>
                ),
              },
            ]}
            search
            exportCSV={{
              fileName: `availableArea_${moment(new Date()).format(
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
                  cellEdit={cellEditFactory({
                    mode: "dbclick",
                    blurToSave: true,
                    afterSaveCell,
                  })}
                />
              </div>
            )}
          </ToolkitProvider>
        </div>
        <LibraryComponents.Modal.ModalConfirm
          {...deleteItem}
          click={() => {
            Services.deleteavailableArea(deleteItem.id).then((res: any) => {
              if (res.status === LibraryModels.StatusCode.SUCCESS) {
                LibraryComponents.ToastsStore.success(`availableArea deleted.`)
                setDeleteItem({ show: false })
                rootStore.availableAreaStore.fetchListAvailableArea()
              }
            })
          }}
        />
      </div>
    </>
  )
})

export default AvailableArea
