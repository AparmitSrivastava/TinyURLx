"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }



  return (
    <div className='mx-auto max-w-lg bg-green-200 my-15 p-8 rounded-xl flex flex-col gap-5'>
      <h1 className='font-bold text-2xl text-blue-900'>Generate your short URLs</h1>
      <div className='flex flex-col gap-2'>
        <input type="text"
          value={url}
          className='px-4 py-2 focus:outline-green-800 bg-white rounded-md text-black'
          placeholder='Enter your URL here'
          onChange={e => seturl(e.target.value)} />

        <input type="text"
          value={shorturl}
          className='px-4 py-2 focus:outline-green-800 bg-white rounded-md text-black'
          placeholder='Enter your preferred URL type'
          onChange={e => setshorturl(e.target.value)} />

        <button onClick={generate} className='bg-green-600 shadow-lg py-2 p-3 my-3 rounded-lg font-bold text-white'>Generate</button>
      </div>

      {generated && <>
        <span className='font-bold text-lg'>Your Link :</span> <code> 
          <Link target='_blank' href={generated}>{generated}</Link>
        </code> 
        </>
        }
    </div>
  )
}

export default Shorten
