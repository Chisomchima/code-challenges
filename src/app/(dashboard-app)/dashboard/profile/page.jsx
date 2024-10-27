"use client"
import React from 'react'
import {Tabs, Tab} from '../../../../components/ui/Tab'


function page() {
  return (
    <div className="flex flex-col gap-8 overflow-x-hidden mt-12 md:mt-5  h-[100%] px-4 md:px-0">
      <Tabs>
        <Tab title="In Progress">
hi
        </Tab>
        <Tab title="Completed">
there
        </Tab>
      </Tabs>
    </div>
  )
}

export default page