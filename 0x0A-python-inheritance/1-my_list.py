#!/usr/bin/python3
"""
Defination of MyList class that inherit from class list
"""


class MyList(list):
    """
    class MyList that inherits from list
    """

    def print_sorted(self):
        """
        Sort in ascending order
        """

        print(sorted(self))
