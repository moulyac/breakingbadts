import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { InputFrom } from './InputForm';
import user from "@testing-library/user-event"

describe("search form",()=>{
  const onSubmit = jest.fn();

  beforeEach(()=>{
    onSubmit.mockClear();
  })

  it("onsubmit is called when all fields pass validation",async ()=>{
    render(<InputFrom handleSearch={onSubmit}/>);
    const search = screen.getByRole("textbox",{
      name: /search/i
    });
    user.type(search,"hen")

    user.click(screen.getByRole("button",{ name: /submit/i} ))

    await waitFor(()=>{
      expect(onSubmit).toBeCalled()    
    })

    await waitFor(()=>{
      expect(onSubmit).toBeCalledWith("hen")    
    })
    
  })
})



// const createWrapper = () => {
//   const queryClient = new QueryClient({
//     defaultOptions: {
//       queries: {
//         retry: false,
//       },
//     },
//   })
//   return ({ children }) => (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   )
// }

// test("my first test", async () => {
//   const { result, waitFor } = renderHook(() => , {
//     wrapper: createWrapper()
//   })

//   // ✅ wait until the query has transitioned to success state
//   await waitFor(() => result.current.isSuccess)

//   expect(result.current.data).toBeDefined()
// }