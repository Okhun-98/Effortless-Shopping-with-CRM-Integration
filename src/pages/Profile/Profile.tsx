import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../../types/user";
import { Link } from "react-router-dom";

export const Profile = () => {
  const params = useParams();
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/users/" + params.id);
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border">
      {user ? (
        <>
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User ID {user.id}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This is some information about the user.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.username}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.email}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.phone}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.address ? (
                    <>
                      {user.address.city}
                      <br />
                      {user.address.street}
                    </>
                  ) : (
                    "Address not available"
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
      <Link
        to="/admin/users"
        className="block mt-4 px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-lg"
      >
        Back to User List
      </Link>
    </div>
  );
};
