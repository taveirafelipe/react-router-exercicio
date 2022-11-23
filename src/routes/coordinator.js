export const goToHome = (navigator) => {
    navigator("/");
};

export const goToProfile = (navigator, name) => {
    navigator(`/profile/${name}`);
};