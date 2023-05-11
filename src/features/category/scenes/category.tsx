/* eslint-disable */
import React, { useState } from "react"
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

const Category = observer(() => {
  const rootStore = React.useContext(Contexts.rootStore)
  const [deleteItem, setDeleteItem] = useState<any>({})

  return (
    <>
      <LibraryComponents.Header>
        <LibraryComponents.PageHeading
          title="Category"
          subTitle="Add, Edit & Delete Category"
        />
      </LibraryComponents.Header>
      <div className=" mx-auto  p-4  flex-wrap">
        <div className="m-1 p-2 rounded-lg shadow-xl">
          <LibraryComponents.Grid>
            <LibraryComponents.List direction="col" space={4} justify="stretch" fill>
              <LibraryComponents.Form.Input
                label="Category"
                id="category"
                placeholder="Category"
                value={rootStore.categoryStore.category?.category}
                onChange={(category) => {
                  rootStore.categoryStore.updateCategory({
                    ...rootStore.categoryStore.category,
                    category,
                  })
                }}
              />

              <LibraryComponents.List
                direction="row"
                space={4}
                justify="stretch"
                fill
              >
                <LibraryComponents.Form.Input
                  label="Sub category"
                  id="subcategory"
                  placeholder="Sub category"
                  value={rootStore.categoryStore.category?.subCat}
                  onChange={(subCat) => {
                    rootStore.categoryStore.updateCategory({
                      ...rootStore.categoryStore.category,
                      subCat,
                    })
                  }}
                />
                <div className="mt-4">
                  <LibraryComponents.Button
                    size="medium"
                    type="solid"
                    onClick={() => {
                      if (rootStore.categoryStore.category?.subCat !== "") {
                        rootStore.categoryStore.subCategoryAppend(
                          rootStore.categoryStore.category?.subCat || ""
                        )
                        rootStore.categoryStore.updateCategory({
                          ...rootStore.categoryStore.category,
                          subCat: "",
                        })
                      }
                    }}
                  >
                    Add
                  </LibraryComponents.Button>
                </div>
              </LibraryComponents.List>
              <LibraryComponents.List space={2} direction="row" justify="center">
                {rootStore.categoryStore.arrSubCategory?.map((item, index) => (
                  <LibraryComponents.Button
                    key={index}
                    size="medium"
                    type="solid"
                    icon={LibraryComponents.Icons.Remove}
                    onClick={() => {
                      const firstArr =
                        rootStore.categoryStore.arrSubCategory?.slice(0, index) || []
                      const secondArr =
                        rootStore.categoryStore.arrSubCategory?.slice(index + 1) ||
                        []
                      const newArrSubCategory = [...firstArr, ...secondArr]
                      console.log({ newArrSubCategory })
                      rootStore.categoryStore.arrSubCategory = newArrSubCategory
                    }}
                  >
                    {item}
                  </LibraryComponents.Button>
                ))}
              </LibraryComponents.List>
              <LibraryComponents.Form.InputFile
                label="File"
                id="file"
                placeholder="File"
                onChange={(e) => {
                  const image = e.target.files[0]
                  rootStore.categoryStore.updateCategory({
                    ...rootStore.categoryStore.category,
                    image,
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
                if (
                  rootStore.categoryStore.category?.category !== "" &&
                  rootStore.categoryStore.arrSubCategory?.length !== 0
                ) {
                  rootStore.setProcessLoading(true)
                  Services.addcategory(
                    rootStore.categoryStore.category,
                    rootStore.categoryStore.arrSubCategory || []
                  ).then((res) => {
                    if (res.status === LibraryModels.StatusCode.CREATED) {
                      LibraryComponents.ToastsStore.success(`Category created.`)
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
            data={rootStore.categoryStore.listcategory || []}
            columns={[
              {
                dataField: "category",
                text: "category",
              },
              {
                dataField: "subCategory",
                text: "SubCategorys",
                formatter: (cellContent, row) => (
                  <>
                    <LibraryComponents.List
                      space={2}
                      direction="row"
                      justify="center"
                    >
                      {row.subCategory.map((item, index) => (
                        <LibraryComponents.Button
                          key={index}
                          size="medium"
                          type="solid"
                          icon={LibraryComponents.Icons.Remove}
                          onClick={() => {
                            const firstArr = row.subCategory?.slice(0, index) || []
                            const secondArr = row.subCategory.slice(index + 1) || []
                            const newSubCategory = [...firstArr, ...secondArr]
                            Services.updateSingleFiled({
                              id: row._id,
                              dataField: "subCategory",
                              newValue: newSubCategory,
                            }).then((res) => {
                              console.log({ res })
                              rootStore.categoryStore.fetchListcategory()
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
                        label="Sub category"
                        id="subcategory"
                        placeholder="Sub category"
                        value={rootStore.categoryStore.category?.subCat}
                        onChange={(subCat) => {
                          rootStore.categoryStore.updateCategory({
                            ...rootStore.categoryStore.category,
                            subCat,
                          })
                        }}
                      />
                      <div className="mt-4">
                        <LibraryComponents.Button
                          size="medium"
                          type="solid"
                          onClick={() => {
                            const mainSubCategory: [string] = row.subCategory
                            if (rootStore.categoryStore.category?.subCat !== "") {
                              mainSubCategory.push(
                                rootStore.categoryStore.category?.subCat || ""
                              )
                              Services.updateSingleFiled({
                                id: row._id,
                                dataField: "subCategory",
                                newValue: mainSubCategory,
                              }).then((res) => {
                                rootStore.categoryStore.updateCategory({
                                  ...rootStore.categoryStore.category,
                                  subCat: "",
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
                      {row.subCategory.map((item, index) => (
                        <LibraryComponents.Button
                          key={index}
                          size="medium"
                          type="solid"
                          icon={LibraryComponents.Icons.Remove}
                          onClick={() => {
                            const firstArr = row.subCategory?.slice(0, index) || []
                            const secondArr = row.subCategory.slice(index + 1) || []
                            const newSubCategory = [...firstArr, ...secondArr]
                            Services.updateSingleFiled({
                              id: row._id,
                              dataField: "subCategory",
                              newValue: newSubCategory,
                            }).then((res) => {
                              console.log({ res })
                              rootStore.categoryStore.fetchListcategory()
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
              fileName: `category_${moment(new Date()).format(
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
                    // afterSaveCell,
                  })}
                />
              </div>
            )}
          </ToolkitProvider>
        </div>
        <LibraryComponents.Modal.ModalConfirm
          {...deleteItem}
          click={() => {
            Services.deletecategory(deleteItem.id).then((res: any) => {
              if (res.status === LibraryModels.StatusCode.SUCCESS) {
                LibraryComponents.ToastsStore.success(`category deleted.`)
                setDeleteItem({ show: false })
                rootStore.categoryStore.fetchListcategory()
              }
            })
          }}
        />
      </div>
    </>
  )
})

export default Category
