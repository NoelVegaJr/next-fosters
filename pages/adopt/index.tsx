import React from 'react';
import AdoptionList from '../../components/Adoption/AdoptionList';
import Header from '../../components/Layout/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faCat } from '@fortawesome/free-solid-svg-icons';

const AdoptPage = (): JSX.Element => {
  return (
    <>
      <main className="max-w-5xl mx-auto">
        <Header>Adopt Today</Header>
        <div className=" bg-violet-600 mb-20">
          <h3 className="text-xl text-white font-bold  p-4 tracking-wide">
            Find your perfect pet!
          </h3>
          <div className="bg-neutral-100 p-4">
            <fieldset className="flex justify-between">
              <div>
                <p>Pet Type</p>
                <div className="flex bg-white items-center text-xl gap-2 p-1">
                  <div className="flex gap-20 p-2 bg-slate-100 px-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="all"
                        name="petType"
                        className="h-5 w-5 bg-violet-900"
                        defaultChecked
                      />
                      <span>All</span>
                    </div>
                    <FontAwesomeIcon icon={faCat} />
                  </div>
                  <div className="flex gap-20 px-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="dog"
                        name="petType"
                        className="h-5 w-5"
                      />
                      <span>Dog</span>
                    </div>

                    <FontAwesomeIcon icon={faDog} />
                  </div>
                  <div className="flex gap-20 px-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="cat"
                        name="petType"
                        className="h-5 w-5"
                      />
                      <span>Cat</span>
                    </div>
                    <FontAwesomeIcon icon={faCat} />
                  </div>
                </div>
              </div>

              <div>
                <p>Location</p>
                <select className="text-xl">
                  <option>All</option>
                  <option>Somerville</option>
                  <option>Bridgewater</option>
                </select>
              </div>
            </fieldset>
          </div>
        </div>
        <AdoptionList />
      </main>
    </>
  );
};

export default AdoptPage;
