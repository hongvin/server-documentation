---
sidebar_position: 2
---

# Basic Information of the Server

### File structure

By default, your home folder should be `/home/<username>`. You are not able to access other user's file, except the dataset folder. The second disk is mounted at `/home/dataset`. This folder is accessible by all user. This folder is meant to store dataset, and so do not delete any other file on this folder.

### Dangerous Actions to avoid

To enable you to install certain software and requirements for your project, by default, you have the sudo previlage for your account. However, if you did not use it with care, you might corrupt the whole server! Below are some of the **dangerous** actions tha you should **avoid at all cost**.

1. `sudo apt-get upgrade`. This will upgrade the whole system to the newest release of Ubuntu. This might cause a lot of **mismatch requirements** for your project, especially when the newest release has yet been used by most project maintainer. Although many online tutorial ask you to run this command, **please skip this command**, since it is usually not required.

2. **Installing NVIDIA driver**. NVIDIA driver is shared for all user in the server. If you specifically required certain version of the driver, please contact administrator before installing yourself! You should try to run the source code / project you intended to run before contacting administrator, since most of the time it's just compatible.

3. `/opt/` and `/usr/local/nvidia/bin`. Avoid at all cost. Do not try to delete or edit any file in the folder. If you use conda, the cudatoolkit is independent from `/opt`.

### Setting up your requirement from scratch
