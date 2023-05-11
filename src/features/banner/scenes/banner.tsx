import React, { useState } from "react"
import { observer } from "mobx-react"
import * as LibraryComponents from "@df/library/components"
import * as LibraryModels from "@df/library/models"
import Contexts from "@df/library/stores"
import * as Services from "../services"

const Banner = observer(() => {
  const rootStore = React.useContext(Contexts.rootStore)
  const [deleteItem, setDeleteItem] = useState<any>({})
  const [subCategory, setSubCategory] = useState<[string]>([""])

  return (
    <>
      <LibraryComponents.Header>
        <LibraryComponents.PageHeading
          title="Banner"
          subTitle="Add, Edit & Delete Banner"
        />
      </LibraryComponents.Header>
      <div className=" mx-auto  p-4  flex-wrap">
        <div className="m-1 p-2 rounded-lg shadow-xl">
          <LibraryComponents.Grid >
            <LibraryComponents.List direction="col" space={4} justify="stretch" fill>
              <LibraryComponents.Form.Input
                label="Title"
                id="title"
                placeholder="Title"
                value={rootStore.bannerStore.banner?.title}
                onChange={(title) => {
                  rootStore.bannerStore.updateBanner({
                    ...rootStore.bannerStore.banner,
                    title,
                  })
                }}
              />
              <LibraryComponents.Form.InputWrapper label="Category" id="category">
                <select
                  name="category"
                  className="leading-4 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border border-gray-300 rounded-md"
                  onChange={(e) => {
                    const category = e.target.value
                    rootStore.bannerStore.updateBanner({
                      ...rootStore.bannerStore.banner,
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
              <LibraryComponents.Form.InputWrapper
                label="Sub Category"
                id="subCategory"
              >
                <select
                  name="subCategory"
                  className="leading-4 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border border-gray-300 rounded-md"
                  onChange={(e) => {
                    const subCategory = e.target.value
                    rootStore.bannerStore.updateBanner({
                      ...rootStore.bannerStore.banner,
                      subCategory,
                    })
                  }}
                >
                  <option selected>Select</option>
                  {subCategory.map((item: string, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </LibraryComponents.Form.InputWrapper>

              <LibraryComponents.Form.InputFile
                label="File"
                id="file"
                placeholder="File"
                //value={rootStore.bannerStore.banner?.image}
                onChange={(e) => {
                  const image = e.target.files[0]
                  rootStore.bannerStore.updateBanner({
                    ...rootStore.bannerStore.banner,
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
                rootStore.setProcessLoading(true)
                console.log({ ca: rootStore.bannerStore.banner })

                if (rootStore.bannerStore.banner !== undefined) {
                  Services.addBanner(rootStore.bannerStore.banner).then((res) => {
                    if (res.status === LibraryModels.StatusCode.CREATED) {
                      LibraryComponents.ToastsStore.success(`Banner created.`)
                      setTimeout(() => {
                        window.location.reload()
                      }, 2000)
                    }
                  })
                } else {
                  alert("Please select category")
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
          <table className="border-separate border border-green-800 w-full">
            <thead>
              <tr>
                <th className="border border-green-600">Title</th>
                <th className="border border-green-600">Category</th>
                <th className="border border-green-600">Sub Category</th>
                <th className="border border-green-600">Image</th>
                <th className="border border-green-600">Delete</th>
              </tr>
            </thead>
            <tbody>
              {rootStore.bannerStore.listBanner?.map((item, key) => (
                <tr key={key}>
                  <td className="border border-green-600 text-center">
                    {item.title}
                  </td>
                  <td className="border border-green-600 text-center">
                    {item.category}
                  </td>
                  <td className="border border-green-600 text-center">
                    {item.subCategory}
                  </td>
                  <td className="border border-green-600">
                    <img src={item.image} style={{ width: 100, height: 100 }} alt="logo" />
                  </td>
                  <td className="border border-green-600 text-center p-1">
                    <LibraryComponents.Button
                      size="small"
                      type="outline"
                      icon={LibraryComponents.Icons.Remove}
                      onClick={() => {
                        setDeleteItem({
                          show: true,
                          id: item._id,
                          title: "Are you sure?",
                          body: `Delete ${item.title}!`,
                        })
                      }}
                    >
                      Delete
                    </LibraryComponents.Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <LibraryComponents.Modal.ModalConfirm
          {...deleteItem}
          click={() => {
            Services.deleteBanner(deleteItem.id).then((res: any) => {
              console.log({ res })

              if (res.status) {
                LibraryComponents.ToastsStore.success(`Banner deleted.`)
                setDeleteItem({ show: false })
                rootStore.bannerStore.fetchListBanner()
              }
            })
          }}
        />
      </div>
    </>
  )
})

export default Banner
