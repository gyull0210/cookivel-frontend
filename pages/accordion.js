import tw from 'twin.macro'

const Accordion = () => {
  return (
    <div tw="mx-auto px-5">
      <div tw="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
        <div tw="py-5">
          <details className="group">
            <summary tw="flex cursor-pointer list-none items-center justify-between font-medium">
              <span> How does the billing work?</span>
              <span tw="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p tw="group-open:animate-fadeIn mt-3 text-neutral-600">Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.</p>
          </details>
        </div>
      </div>
    </div>
  )
}

export default Accordion;