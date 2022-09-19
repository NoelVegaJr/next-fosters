import { useRouter } from 'next/router';
export default function AdoptionPage() {
  const router = useRouter();
  return (
    <>
      {/* <h1>Adoption form for {router.query.id}</h1> */}
      <form>
        <section>
          <p className='font-semibold'>Personal Information</p>
          <div className='flex flex-col'>
            <label>Name</label>
            <input type='text' className='border rounded' />
          </div>
          <div className='flex flex-col'>
            <label>Address</label>
            <input type='text' className='border rounded' />
          </div>
          <div className='flex flex-col md:flex-row  gap-4'>
            <div className='flex flex-col w-full  md:basis-1/3'>
              <label>City</label>
              <input type='text' className='border rounded w-full' />
            </div>
            <div className='flex flex-col w-full  md:basis-1/3'>
              <label>State</label>
              <input type='text' className='border rounded w-full' />
            </div>
            <div className='flex flex-col w-full  md:basis-1/3'>
              <label>Zip Code</label>
              <input type='text' className='border rounded w-full' />
            </div>
          </div>
        </section>
        <section>
          <p className='font-semibold'>Pet Preference Information</p>
          <div className='flex flex-wrap justify-between gap-4'>
            <article className='w-full'>
              <p>Age:</p>
              <div className='flex gap-2  w-full'>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Kitten</label>
                </div>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Adult</label>
                </div>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Senior</label>
                </div>
              </div>
            </article>
            <article>
              <p>Gender:</p>
              <div className='flex gap-2  w-full'>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Male</label>
                </div>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Female</label>
                </div>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>No Preference</label>
                </div>
              </div>
            </article>
            <article>
              <p>Gets along with:</p>
              <div className='flex gap-2  w-full'>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Cats</label>
                </div>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Dogs</label>
                </div>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Children</label>
                </div>
              </div>
            </article>
            <article>
              <p>This cat will be:</p>
              <div className='flex flex-col gap-2  w-full'>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Companion for self/family</label>
                </div>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Barn cat/mouser</label>
                </div>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Companion for someone else</label>
                </div>
              </div>
            </article>
            <article>
              <p>My current cats are:</p>
              <div className='flex flex-col gap-2  w-full'>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Free to roam inside & outside</label>
                </div>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Supervised outside</label>
                </div>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Outside on harness or leash</label>
                </div>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Strictly Indoors</label>
                </div>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Declawed</label>
                </div>
              </div>
            </article>
            <article>
              <p>My new cat(s) will be:</p>
              <div className='flex flex-col gap-2  w-full'>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Free to roam inside & outside</label>
                </div>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Supervised outside</label>
                </div>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Outside on harness or leash</label>
                </div>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Strictly Indoors</label>
                </div>
                <div className='flex gap-1'>
                  <input type='checkbox' />
                  <label>Declawed</label>
                </div>
              </div>
            </article>
          </div>
        </section>
      </form>
    </>
  );
}
