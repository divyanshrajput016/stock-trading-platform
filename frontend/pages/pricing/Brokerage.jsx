import React from 'react'

const Brokerage = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 my-10">
      <h2 className="text-2xl font-semibold mb-4">
        Charges for account opening
      </h2>

      <table className="w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-4">Type of account</th>
            <th className="text-left p-4">Charges</th>
          </tr>
        </thead>

        <tbody className='text-sm'>
          <tr className="border-t">
            <td className="p-4">Online account</td>
            <td className="p-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-semibold">
                FREE
              </span>
            </td>
          </tr>

          <tr className="border-t">
            <td className="p-4">Offline account</td>
            <td className="p-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-semibold">
                FREE
              </span>
            </td>
          </tr>

          <tr className="border-t">
            <td className="p-4">NRI account (offline only)</td>
            <td className="p-4">₹ 500</td>
          </tr>

          <tr className="border-t">
            <td className="p-4">
              Partnership, LLP, HUF, or Corporate accounts (offline only)
            </td>
            <td className="p-4">₹ 500</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Brokerage
