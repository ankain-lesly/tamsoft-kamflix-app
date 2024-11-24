// import { useParams } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import FormControlMin from "../inputs/form-control-min";
import { ChangeEvent, FormEvent, useState } from "react";
import { useMutationUpdateProfile } from "../../api/services/profile-service";
import toast from "react-hot-toast";
import { BiCamera } from "react-icons/bi";
import { UserImageDefault } from "../../assets";
import { loadImageBlob } from "../../lib/utils";

type Props = ModalOptionTypes & {
  data: UserProps;
  onComplete: (data: UserProps) => void;
};

const UpdateUserInfoModal = (props: ModalOptionTypes) => {
  const { data: profile, onComplete, closeModal } = props as Props;
  const mutation = useMutationUpdateProfile();
  const [imgPrev, setImgPrev] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = new FormData(e.currentTarget);

    mutation.mutate(payload, {
      onError: () => toast.error("Network error: Try again later"),
      onSuccess: (data) => {
        onComplete?.(data.data);
        closeModal?.();
        toast.success("Profile updated successfully");
      },
    });
  };

  const handleImageChange = (event: ChangeEvent) => {
    const input = event.target as typeof event.target & {
      files: File[];
    };

    const image = loadImageBlob(input!.files[0]);
    setImgPrev(image);
  };
  return (
    <div className="w-[calc(100vw-60px)] max-w-xl">
      <div className="mb-4">
        <h4>Update profile</h4>
      </div>
      <div className="shadow-lg mb-2">
        <form
          className="input-group form__dark-input  text-white space-y-4"
          encType="multipart/form-data"
          onSubmit={handleSubmit}>
          <div data-main="profile-photo" className="md:self-start">
            <div className="relative w-max mx-auto">
              <div className="border w-28 h-28 md:w-36 md:h-36 my-2 shadow-md hover:opacity-80 transition-all rounded-full overflow-auto relative">
                <img
                  src={imgPrev || profile?.photo || UserImageDefault}
                  className="img-cover"
                />
              </div>
              <label
                htmlFor="photo"
                className="absolute flex-center border w-10 h-10 bg-dark text-white rounded-full bottom-0 md:bottom-4 right-0 hover:bg-dark transition-colors duration-300"
                title="change profile picture">
                <BiCamera fontSize={24} />
              </label>
              <input
                type="file"
                accept="image/*"
                id="photo"
                onChange={handleImageChange}
                name="photo"
                className="hidden"
              />
            </div>
          </div>
          {/* Inputs */}

          <FormControlMin
            required
            label={"Full name"}
            value={profile?.name || ""}
            name="full_name"
          />
          <FormControlMin
            required
            label={"Email"}
            disabled
            name="xr"
            value={profile?.email || ""}
          />
          <FormControlMin
            required
            label={"Phone number"}
            value={profile?.phone || ""}
            name="phone"
          />
          <FormControlMin
            required
            label={"Custom username"}
            placeholder="Example john"
            value={profile?.username || ""}
            name="username"
          />

          <div className="seperator pt-4"></div>
          {/* Actions */}
          {mutation.isPending && (
            <div className="flex items-center  justify-center text-danger mt-4">
              <FiLoader className="text-3xl animate-spin" />
            </div>
          )}
          {/* <div
            id="errorText"
            className={`flex items-center justify-center text-danger mt-4 ${
              state == "ERROR" ? "block" : "hidden"
            }`}></div> */}

          {!mutation.isPending && (
            <div className="control text-center">
              <button
                className="btn flex-center btn-blue mx-auto w-full p-3 rounded-md text-white font-bold"
                type="submit">
                Update
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UpdateUserInfoModal;
