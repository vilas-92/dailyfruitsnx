import React, { useState } from "react"
import { observer } from "mobx-react"
import * as LibraryComponents from "@df/library/components"
import * as LibraryModels from "@df/library/models"
import Contexts from "@df/library/stores"
import * as Services from "../services"
import * as Utils from "../utils"
import * as Models from "../models"

import BootstrapTable from "react-bootstrap-table-next"
import cellEditFactory, { Type } from "react-bootstrap-table2-editor"
import ToolkitProvider, { Search, CSVExport } from "react-bootstrap-table2-toolkit"
import moment from "moment"

const { SearchBar, ClearSearchButton } = Search
const { ExportCSVButton } = CSVExport

const Product = observer(() => {
  const rootStore = React.useContext(Contexts.rootStore)
  const [errors, setErrors] = useState<Models.Product>()
  const [deleteItem, setDeleteItem] = useState<any>({})
  const [fileUpload, setFileUpload] = useState<any>({})
  const [subCategroy, setSubCategory] = useState<[string]>([""])

  const afterSaveCell = (oldValue, newValue, row, column) => {
    if (oldValue !== newValue) {
      rootStore.setProcessLoading(true)
      Services.updateSingleFiled({
        newValue,
        dataField: column.dataField,
        id: row._id,
      }).then((res) => {
        rootStore.setProcessLoading(false)
        if (res.data) {
          //rootStore.productStore.fetchListproduct()
          LibraryComponents.ToastsStore.success(`Product update.`)
          setTimeout(() => {
            window.location.reload()
          }, 2000)
        }
      })
    }
  }

  return (
    <>
      <LibraryComponents.Header>
        <LibraryComponents.PageHeading
          title="Product"
          subTitle="Add, Edit & Delete"
        />
      </LibraryComponents.Header>
      <div className=" mx-auto flex-wrap">
        <div className="p-2 rounded-lg shadow-xl">
          <LibraryComponents.Grid cols={2}>
            <LibraryComponents.List direction="col" space={4} justify="stretch" fill>
              <LibraryComponents.Form.InputWrapper label="Category" id="category">
                <select
                  name="category"
                  className="leading-4 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border border-gray-300 rounded-md"
                  onChange={(e) => {
                    const category = e.target.value
                    setErrors({
                      ...errors,
                      category: Utils.validate.single(
                        category,
                        Utils.constraintsProduct.category
                      ),
                    })
                    rootStore.productStore.updateproduct({
                      ...rootStore.productStore.product,
                      category,
                    })
                    setSubCategory(
                      rootStore.categoryStore.listcategory.find(
                        (item) => item.category === category
                      )?.subCategory || [""]
                    )
                  }}
                >
                  <option selected>Select</option>
                  {rootStore.categoryStore.listcategory.map((item: any) => (
                    <option key={item.category} value={item.category}>
                      {item.category}
                    </option>
                  ))}
                </select>
              </LibraryComponents.Form.InputWrapper>
              {errors?.category && (
                <span className="text-red-600 font-medium relative">
                  {errors.category}
                </span>
              )}
              <LibraryComponents.Form.InputWrapper
                label="Sub Category"
                id="subCategory"
              >
                <select
                  name="subCategory"
                  className="leading-4 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border border-gray-300 rounded-md"
                  onChange={(e) => {
                    const subCategory = e.target.value
                    setErrors({
                      ...errors,
                      subCategory: Utils.validate.single(
                        subCategory,
                        Utils.constraintsProduct.subCategory
                      ),
                    })
                    rootStore.productStore.updateproduct({
                      ...rootStore.productStore.product,
                      subCategory,
                    })
                  }}
                >
                  <option selected>Select</option>
                  {subCategroy.map((item: string, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </LibraryComponents.Form.InputWrapper>
              {errors?.subCategory && (
                <span className="text-red-600 font-medium relative">
                  {errors.subCategory}
                </span>
              )}
              <LibraryComponents.Form.Input
                label="Title"
                id="title"
                placeholder="Title"
                value={rootStore.productStore.product?.title}
                onChange={(title) => {
                  setErrors({
                    ...errors,
                    title: Utils.validate.single(
                      title,
                      Utils.constraintsProduct.title
                    ),
                  })
                  rootStore.productStore.updateproduct({
                    ...rootStore.productStore.product,
                    title,
                  })
                }}
              />
              {errors?.title && (
                <span className="text-red-600 font-medium relative">
                  {errors.title}
                </span>
              )}
              <LibraryComponents.Form.Input
                label="Unit"
                id="unit"
                placeholder="Unit"
                value={rootStore.productStore.product?.unit}
                onChange={(unit) => {
                  rootStore.productStore.updateproduct({
                    ...rootStore.productStore.product,
                    unit,
                  })
                }}
              />
              <LibraryComponents.Form.Input
                label="Description"
                id="description"
                placeholder="Description"
                value={rootStore.productStore.product?.description}
                onChange={(description) => {
                  rootStore.productStore.updateproduct({
                    ...rootStore.productStore.product,
                    description,
                  })
                }}
              />
              <LibraryComponents.Form.Input
                label="Benefits"
                id="benefits"
                placeholder="Benefits"
                value={rootStore.productStore.product?.benefits}
                onChange={(benefits) => {
                  rootStore.productStore.updateproduct({
                    ...rootStore.productStore.product,
                    benefits,
                  })
                }}
              />
            </LibraryComponents.List>
            <LibraryComponents.List direction="col" space={4} justify="stretch" fill>
              <LibraryComponents.Form.Input
                label="Info"
                id="info"
                placeholder="Info"
                value={rootStore.productStore.product?.info}
                onChange={(info) => {
                  rootStore.productStore.updateproduct({
                    ...rootStore.productStore.product,
                    info,
                  })
                }}
              />
              <LibraryComponents.Form.Input
                type="number"
                label="MRP"
                id="mrp"
                placeholder="MRP"
                value={rootStore.productStore.product?.mrp}
                onChange={(mrp) => {
                  setErrors({
                    ...errors,
                    mrp: Utils.validate.single(mrp, Utils.constraintsProduct.mrp),
                  })
                  rootStore.productStore.updateproduct({
                    ...rootStore.productStore.product,
                    mrp,
                  })
                }}
              />
              {errors?.mrp && (
                <span className="text-red-600 font-medium relative">
                  {errors.mrp}
                </span>
              )}
              <LibraryComponents.Form.Input
                type="number"
                label="Sell Price"
                id="sellPrice"
                placeholder="Sell Price"
                value={rootStore.productStore.product?.sellPrice}
                onChange={(sellPrice) => {
                  setErrors({
                    ...errors,
                    mrp: Utils.validate.single(
                      sellPrice,
                      Utils.constraintsProduct.mrp
                    ),
                  })
                  rootStore.productStore.updateproduct({
                    ...rootStore.productStore.product,
                    sellPrice,
                  })
                }}
              />
              {errors?.sellPrice && (
                <span className="text-red-600 font-medium relative">
                  {errors.sellPrice}
                </span>
              )}
              <LibraryComponents.Form.InputRadio
                label="Stock"
                name="stock"
                values={["In Stock", "Out Stock"]}
                value={rootStore.productStore.product?.isStock}
                onChange={(isStock) => {
                  rootStore.productStore.updateproduct({
                    ...rootStore.productStore.product,
                    isStock,
                  })
                }}
              />
              <LibraryComponents.Form.InputRadio
                label="Status"
                name="Status"
                values={["Show", "Hide"]}
                value={rootStore.productStore.product?.isStatus}
                onChange={(isStatus) => {
                  rootStore.productStore.updateproduct({
                    ...rootStore.productStore.product,
                    isStatus,
                  })
                }}
              />
              <LibraryComponents.Form.InputFile
                label="File"
                id="file"
                placeholder="File"
                // value={rootStore.productStore.product?.image}
                onChange={(e) => {
                  const image = e.target.files[0]
                  rootStore.productStore.updateproduct({
                    ...rootStore.productStore.product,
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
                  Utils.validate(
                    rootStore.productStore.product,
                    Utils.constraintsProduct
                  ) === undefined
                ) {
                  rootStore.setProcessLoading(true)
                  Services.addproduct(rootStore.productStore.product).then((res) => {
                    if (res.status === LibraryModels.StatusCode.CREATED) {
                      LibraryComponents.ToastsStore.success(`product created.`)
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
                //  rootStore.userStore.clear()
              }}
            >
              Clear
            </LibraryComponents.Button>
          </LibraryComponents.List>
        </div>
        <br />
        <div className="p-2 rounded-lg shadow-xl overflow-auto">
          <ToolkitProvider
            keyField="id"
            data={rootStore.productStore.listproduct || []}
            columns={[
              {
                dataField: "title",
                text: "Title",
                sort: true,
                headerStyle: { minWidth: "150px" },
              },
              {
                dataField: "category",
                text: "Category",
                editable: false,
                headerStyle: { minWidth: "150px" },
              },
              {
                dataField: "subCategory",
                text: "Sub Category",
                editable: false,
                headerStyle: { minWidth: "150px" },
              },
              {
                dataField: "unit",
                text: "Unit",
                headerStyle: { minWidth: "150px" },
              },
              {
                dataField: "description",
                text: "Description",
                headerStyle: { minWidth: "150px" },
              },
              {
                dataField: "benefits",
                text: "Benefits",
                headerStyle: { minWidth: "150px" },
              },
              {
                dataField: "info",
                text: "Info",
                headerStyle: { minWidth: "150px" },
              },

              {
                dataField: "mrp",
                text: "Mrp",
                headerStyle: { minWidth: "150px" },
              },
              {
                dataField: "sellPrice",
                text: "Sell Price",
                headerStyle: { minWidth: "150px" },
              },
              {
                dataField: "isStock",
                text: "Stock",
                headerStyle: { minWidth: "150px" },
                editor: {
                  type: Type.SELECT,
                  getOptions: () => {
                    return [
                      {
                        value: "In Stock",
                        label: "In Stock",
                      },
                      {
                        value: "Out Stock",
                        label: "Out Stock",
                      },
                    ]
                  },
                },
              },
              {
                dataField: "isStatus",
                text: "Status",
                headerStyle: { minWidth: "150px" },
                editor: {
                  type: Type.SELECT,
                  getOptions: () => {
                    return [
                      {
                        value: "Show",
                        label: "Show",
                      },
                      {
                        value: "Hide",
                        label: "Hide",
                      },
                    ]
                  },
                },
              },
              {
                dataField: "image",
                text: "Image",
                headerStyle: { minWidth: "150px" },
                formatter: (cell, row) => {
                  return (
                    <>
                      <img
                        src={row.image}
                        style={{ width: 100, height: 100 }}
                        alt="logo"
                        onClick={() => {
                          setFileUpload({
                            show: true,
                            id: row._id,
                            title: "Upload new image",
                          })
                        }}
                      />
                    </>
                  )
                },
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
                          body: `Delete ${row.title} product!`,
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
              fileName: `deginisation_${moment(new Date()).format(
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
            Services.deleteproduct(deleteItem.id).then((res: any) => {
              if (res.status) {
                LibraryComponents.ToastsStore.success(`product deleted.`)
                setDeleteItem({ show: false })
                rootStore.productStore.fetchListproduct()
              }
            })
          }}
        />
        <LibraryComponents.Modal.ModalFileUpload
          {...fileUpload}
          click={(msg: string) => {
            rootStore.productStore.fetchListproduct()
            LibraryComponents.ToastsStore.success(msg)
          }}
        />
      </div>
    </>
  )
})

export default Product
